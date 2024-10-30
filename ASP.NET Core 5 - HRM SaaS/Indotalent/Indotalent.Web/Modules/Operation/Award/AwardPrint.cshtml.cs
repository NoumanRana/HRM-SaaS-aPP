using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("AwardPrint")]
    [ReportDesign(MVC.Views.Operation.Award.AwardPrint)]
    [RequiredPermission("*")]
    public class AwardPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public AwardPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new AwardPrintData();

            using (var connection = SqlConnections.NewFor<AwardRow>())
            {
                var h = AwardRow.Fields;
                data.Header = connection.TryById<AwardRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.AwardeeName)
                     .Select(h.BranchName)
                     .Select(h.DepartmentName));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class AwardPrintData
    {
        public AwardRow Header { get; set; }
    }
}
