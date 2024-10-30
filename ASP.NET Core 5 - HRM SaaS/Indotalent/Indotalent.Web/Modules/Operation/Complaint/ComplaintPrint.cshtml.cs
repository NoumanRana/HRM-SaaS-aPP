using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("ComplaintPrint")]
    [ReportDesign(MVC.Views.Operation.Complaint.ComplaintPrint)]
    [RequiredPermission("*")]
    public class ComplaintPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public ComplaintPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new ComplaintPrintData();

            using (var connection = SqlConnections.NewFor<ComplaintRow>())
            {
                var h = ComplaintRow.Fields;
                data.Header = connection.TryById<ComplaintRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.ReporterName)
                     .Select(h.BranchName)
                     .Select(h.DepartmentName));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class ComplaintPrintData
    {
        public ComplaintRow Header { get; set; }
    }
}
