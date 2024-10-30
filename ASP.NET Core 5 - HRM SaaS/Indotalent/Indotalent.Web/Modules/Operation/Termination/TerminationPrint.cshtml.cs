using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("TerminationPrint")]
    [ReportDesign(MVC.Views.Operation.Termination.TerminationPrint)]
    [RequiredPermission("*")]
    public class TerminationPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public TerminationPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new TerminationPrintData();

            using (var connection = SqlConnections.NewFor<TerminationRow>())
            {
                var h = TerminationRow.Fields;
                data.Header = connection.TryById<TerminationRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EmployeeName)
                     .Select(h.BranchName)
                     .Select(h.DepartmentName));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class TerminationPrintData
    {
        public TerminationRow Header { get; set; }
    }
}
