using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.PayrollRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.PayrollRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollSaveHandler
    {
        public PayrollSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void BeforeSave()
        {
            base.BeforeSave();

            if (this.IsCreate) AutoFillPayroll();

            Row.TotalBasicSalary = 0;
            Row.TotalIncome = 0;
            Row.TotalDeduction = 0;
            Row.TotalTakeHomePay = 0;
            foreach (var item in Row.ItemList)
            {
                Row.TotalBasicSalary += item.BasicSalary;
                Row.TotalIncome += item.TotalIncome;
                Row.TotalDeduction += item.TotalDeduction;
                Row.TotalTakeHomePay += item.TakeHomePay;
            }


            if (this.IsCreate)
            {
                if (Row.Number.ToLower().Equals("auto"))
                {
                    var tenant = UnitOfWork.Connection.ById<TenantRow>(Row.TenantId);
                    var request = new GetNextNumberRequest()
                    {
                        Prefix = tenant.PayrollNumberUseDate.Value ? tenant.PayrollNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.PayrollNumberPrefix,
                        Length = tenant.PayrollNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }

        private void AutoFillPayroll()
        {
            if (Row.AutoGeneratePayrollDetail.Equals(true))
            {
                var details = new List<PayrollDetailRow>();
                var employees = Connection.List<EmployeeRow>();
                foreach (var employee in employees)
                {
                    var detail = new PayrollDetailRow();
                    detail.EmployeeId = employee.Id;
                    detail.BankAccount = employee.BankAccountForPayroll;
                    detail.BankName = employee.BankNameForPayroll;
                    detail.BasicSalary = employee.BasicSalary;

                    var ei = EmployeeIncomeRow.Fields;
                    var incomes = Connection.List<EmployeeIncomeRow>(x => x.SelectTableFields().Where(ei.EmployeeId == employee.Id.Value));
                    detail.IncomeList = new List<PayrollDetailIncomeRow>();
                    double totalIncome = 0;
                    foreach (var income in incomes)
                    {
                        detail.IncomeList.Add(new PayrollDetailIncomeRow()
                        {
                            PayrollDetailId = detail.Id,
                            IncomeId = income.IncomeId,
                            Amount = income.Amount.Value
                        });
                        totalIncome += income.Amount.Value;
                    }
                    detail.TotalIncome = totalIncome;

                    var ed = EmployeeDeductionRow.Fields;
                    var deductions = Connection.List<EmployeeDeductionRow>(x => x.SelectTableFields().Where(ed.EmployeeId == employee.Id.Value));
                    detail.DeductionList = new List<PayrollDetailDeductionRow>();
                    double totalDeduction = 0;
                    foreach (var deduction in deductions)
                    {
                        detail.DeductionList.Add(new PayrollDetailDeductionRow()
                        {
                            PayrollDetailId = detail.Id,
                            DeductionId = deduction.DeductionId,
                            Amount = deduction.Amount.Value
                        });
                        totalDeduction += deduction.Amount.Value;
                    }
                    detail.TotalDeduction = totalDeduction;

                    detail.TakeHomePay = detail.BasicSalary + detail.TotalIncome - detail.TotalDeduction;
                    details.Add(detail);
                }

                Row.ItemList = details;
            }
        }
    }
}