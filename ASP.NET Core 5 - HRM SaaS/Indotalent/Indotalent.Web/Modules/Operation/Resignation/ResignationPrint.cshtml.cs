using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("ResignationPrint")]
    [ReportDesign(MVC.Views.Operation.Resignation.ResignationPrint)]
    [RequiredPermission("*")]
    public class ResignationPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public ResignationPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new ResignationPrintData();

            using (var connection = SqlConnections.NewFor<ResignationRow>())
            {
                var h = ResignationRow.Fields;
                data.Header = connection.TryById<ResignationRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.ResigneeName)
                     .Select(h.BranchName)
                     .Select(h.DepartmentName));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class ResignationPrintData
    {
        public ResignationRow Header { get; set; }
    }
}
