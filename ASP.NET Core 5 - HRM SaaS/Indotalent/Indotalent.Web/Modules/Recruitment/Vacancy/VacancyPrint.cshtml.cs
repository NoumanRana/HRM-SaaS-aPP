using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Recruitment
{
    [Report("VacancyPrint")]
    [ReportDesign(MVC.Views.Recruitment.Vacancy.VacancyPrint)]
    [RequiredPermission("Recruitment:Vacancy")]
    public class VacancyPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public VacancyPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new VacancyPrintData();

            using (var connection = SqlConnections.NewFor<VacancyRow>())
            {
                var h = VacancyRow.Fields;
                data.Header = connection.TryById<VacancyRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.HiringManagerName)
                     .Select(h.HiringManagerDepartmentName)
                     .Select(h.HiringManagerBranchName));

                var i = VacancyRequirementRow.Fields;
                data.Requirements = connection.List<VacancyRequirementRow>(q => q
                    .SelectTableFields()
                    .Where(i.VacancyId == Id));

                var d = VacancyBenefitRow.Fields;
                data.Benefits = connection.List<VacancyBenefitRow>(q => q
                    .SelectTableFields()
                    .Where(d.VacancyId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class VacancyPrintData
    {
        public VacancyRow Header { get; set; }
        public List<VacancyRequirementRow> Requirements { get; set; }
        public List<VacancyBenefitRow> Benefits { get; set; }
    }
}
