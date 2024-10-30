using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Recruitment
{
    [Report("InterviewPrint")]
    [ReportDesign(MVC.Views.Recruitment.Interview.InterviewPrint)]
    [RequiredPermission("Recruitment:Interview")]
    public class InterviewPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public InterviewPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new InterviewPrintData();

            using (var connection = SqlConnections.NewFor<InterviewRow>())
            {
                var h = InterviewRow.Fields;
                data.Header = connection.TryById<InterviewRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.VacancyNumber)
                     .Select(h.JobTitle)
                     .Select(h.HiringManagerName)
                     .Select(h.ApplicantName));

                var i = InterviewResultRow.Fields;
                data.Results = connection.List<InterviewResultRow>(q => q
                    .SelectTableFields()
                    .Where(i.InterviewId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class InterviewPrintData
    {
        public InterviewRow Header { get; set; }
        public List<InterviewResultRow> Results { get; set; }
    }
}
