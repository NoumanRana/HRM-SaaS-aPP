using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Performance
{
    [Report("TransferPrint")]
    [ReportDesign(MVC.Views.Performance.Transfer.TransferPrint)]
    [RequiredPermission("Performance:Transfer")]
    public class TransferPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public TransferPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new TransferPrintData();

            using (var connection = SqlConnections.NewFor<TransferRow>())
            {
                var h = TransferRow.Fields;
                data.Header = connection.TryById<TransferRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EmployeeName)
                     .Select(h.PromotorName)
                     .Select(h.CurrentBranchName)
                     .Select(h.CurrentDepartmentName)
                     .Select(h.CurrentDesignationName)
                     .Select(h.NewBranchName)
                     .Select(h.NewDepartmentName)
                     .Select(h.NewDesignationName));

                var i = TransferReasonRow.Fields;
                data.Reasons = connection.List<TransferReasonRow>(q => q
                    .SelectTableFields()
                    .Where(i.TransferId == Id));

                var d = TransferCompetencyRow.Fields;
                data.Competencies = connection.List<TransferCompetencyRow>(q => q
                    .SelectTableFields()
                    .Where(d.TransferId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class TransferPrintData
    {
        public TransferRow Header { get; set; }
        public List<TransferReasonRow> Reasons { get; set; }
        public List<TransferCompetencyRow> Competencies { get; set; }
    }
}
