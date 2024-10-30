using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("ReimbursementPrint")]
    [ReportDesign(MVC.Views.Operation.Reimbursement.ReimbursementPrint)]
    [RequiredPermission("*")]
    public class ReimbursementPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public ReimbursementPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new ReimbursementPrintData();

            using (var connection = SqlConnections.NewFor<ReimbursementRow>())
            {
                var h = ReimbursementRow.Fields;
                data.Header = connection.TryById<ReimbursementRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EmployeeName)
                     .Select(h.BranchName)
                     .Select(h.DepartmentName)
                     .Select(h.CurrencyName));

                var i = ReimbursementDetailRow.Fields;
                data.Details = connection.List<ReimbursementDetailRow>(q => q
                    .SelectTableFields()
                    .Where(i.ReimbursementId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class ReimbursementPrintData
    {
        public ReimbursementRow Header { get; set; }
        public List<ReimbursementDetailRow> Details { get; set; }
    }
}
