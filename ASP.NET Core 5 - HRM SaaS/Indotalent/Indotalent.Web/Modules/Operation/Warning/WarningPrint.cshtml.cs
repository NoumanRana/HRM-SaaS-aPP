using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("WarningPrint")]
    [ReportDesign(MVC.Views.Operation.Warning.WarningPrint)]
    [RequiredPermission("*")]
    public class WarningPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public WarningPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new WarningPrintData();

            using (var connection = SqlConnections.NewFor<WarningRow>())
            {
                var h = WarningRow.Fields;
                data.Header = connection.TryById<WarningRow>(Id, q => q
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

    public class WarningPrintData
    {
        public WarningRow Header { get; set; }
    }
}
