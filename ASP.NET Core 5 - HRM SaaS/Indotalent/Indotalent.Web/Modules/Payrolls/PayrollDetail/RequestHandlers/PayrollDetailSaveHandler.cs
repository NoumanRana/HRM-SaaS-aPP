using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.PayrollDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.PayrollDetailRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDetailSaveHandler
    {
        public PayrollDetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void BeforeSave()
        {
            base.BeforeSave();
            Row.TotalIncome = 0;
            Row.TotalDeduction = 0;
            Row.TakeHomePay = 0;
            foreach (var item in Row.IncomeList)
            {
                Row.TotalIncome += item.Amount;
            }
            foreach (var item in Row.DeductionList)
            {
                Row.TotalDeduction += item.Amount;
            }
            Row.TakeHomePay = Row.BasicSalary + Row.TotalIncome - Row.TotalDeduction;
        }
    }
}