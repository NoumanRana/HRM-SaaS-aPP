using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Performance
{
    [Report("AppraisalPrint")]
    [ReportDesign(MVC.Views.Performance.Appraisal.AppraisalPrint)]
    [RequiredPermission("Performance:Appraisal")]
    public class AppraisalPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public AppraisalPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new AppraisalPrintData();

            using (var connection = SqlConnections.NewFor<AppraisalRow>())
            {
                var h = AppraisalRow.Fields;
                data.Header = connection.TryById<AppraisalRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EvaluatorName)
                     .Select(h.EmployeeName));

                var i = AppraisalDetailRow.Fields;
                data.Details = connection.List<AppraisalDetailRow>(q => q
                    .SelectTableFields()
                    .Select(i.EvaluationNumber)
                    .Select(i.EvaluationGroup)
                    .Select(i.EvaluationIndicator)
                    .Where(i.AppraisalId == Id));

            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class AppraisalPrintData
    {
        public AppraisalRow Header { get; set; }
        public List<AppraisalDetailRow> Details { get; set; }
    }
}
