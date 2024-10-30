using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Recruitment
{
    [Report("ApplicantPrint")]
    [ReportDesign(MVC.Views.Recruitment.Applicant.ApplicantPrint)]
    [RequiredPermission("Recruitment:Applicant")]
    public class ApplicantPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public ApplicantPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new ApplicantPrintData();

            using (var connection = SqlConnections.NewFor<ApplicantRow>())
            {
                var h = ApplicantRow.Fields;
                data.Header = connection.TryById<ApplicantRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.VacancyNumber)
                     .Select(h.JobTitle)
                     .Select(h.HiringManagerName));

                var i = ApplicantEducationRow.Fields;
                data.Educations = connection.List<ApplicantEducationRow>(q => q
                    .SelectTableFields()
                    .Where(i.ApplicantId == Id));

                var d = ApplicantExperienceRow.Fields;
                data.Experiences = connection.List<ApplicantExperienceRow>(q => q
                    .SelectTableFields()
                    .Where(d.ApplicantId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class ApplicantPrintData
    {
        public ApplicantRow Header { get; set; }
        public List<ApplicantEducationRow> Educations { get; set; }
        public List<ApplicantExperienceRow> Experiences { get; set; }
    }
}
