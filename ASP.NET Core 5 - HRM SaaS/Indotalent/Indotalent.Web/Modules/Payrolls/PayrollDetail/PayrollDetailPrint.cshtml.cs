using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Payrolls
{
    [Report("PayrollDetailPrint")]
    [ReportDesign(MVC.Views.Payrolls.PayrollDetail.PayrollDetailPrint)]
    [RequiredPermission("Payrolls:Payroll")]
    public class PayrollDetailPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public PayrollDetailPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new PayrollDetailPrintData();

            using (var connection = SqlConnections.NewFor<PayrollDetailRow>())
            {
                var h = PayrollDetailRow.Fields;
                data.Header = connection.TryById<PayrollDetailRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EmployeeName));

                var i = PayrollDetailIncomeRow.Fields;
                data.Incomes = connection.List<PayrollDetailIncomeRow>(q => q
                    .SelectTableFields()
                    .Select(i.IncomeName)
                    .Where(i.PayrollDetailId == Id));

                var d = PayrollDetailDeductionRow.Fields;
                data.Deductions = connection.List<PayrollDetailDeductionRow>(q => q
                    .SelectTableFields()
                    .Select(d.DeductionName)
                    .Where(d.PayrollDetailId == Id));

                var c = Administration.TenantRow.Fields;
                data.Tenant = connection.TryById<Administration.TenantRow>(data.Header.TenantId, q => q
                     .SelectTableFields());
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class PayrollDetailPrintData
    {
        public PayrollDetailRow Header { get; set; }
        public List<PayrollDetailIncomeRow> Incomes { get; set; }
        public List<PayrollDetailDeductionRow> Deductions { get; set; }
        public Administration.TenantRow Tenant { get; set; }
    }
}
