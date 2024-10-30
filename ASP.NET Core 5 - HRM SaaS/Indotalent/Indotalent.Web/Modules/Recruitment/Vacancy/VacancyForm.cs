using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Forms
{
    [FormScript("Recruitment.Vacancy")]
    [BasedOnRow(typeof(VacancyRow), CheckNames = true)]
    public class VacancyForm
    {
        [Tab("General")]
        [Category("Vacancy")]
        public String Number { get; set; }
        public String JobTitle { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String JobDescription { get; set; }
        [HalfWidth]
        [DefaultValue("now")]
        public DateTime OpenDate { get; set; }
        [HalfWidth]
        [DefaultValue("now")]
        public DateTime CloseDate { get; set; }

        [Category("Hiring Manager")]
        public Int32 HiringManagerId { get; set; }
        public Int32 HiringManagerDepartmentId { get; set; }
        public Int32 HiringManagerBranchId { get; set; }

        [Tab("Job Requirements")]
        [Category("Job Requirements")]
        [VacancyRequirementEditor]
        public List<VacancyRequirementRow> VacancyRequirementList { get; set; }

        [Tab("Compensation & Benefits")]
        [Category("Compensation & Benefits")]
        [VacancyBenefitEditor]
        public List<VacancyBenefitRow> VacancyBenefitList { get; set; }
    }
}