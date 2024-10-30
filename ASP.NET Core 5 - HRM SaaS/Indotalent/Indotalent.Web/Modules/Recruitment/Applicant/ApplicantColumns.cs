using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Columns
{
    [ColumnsScript("Recruitment.Applicant")]
    [BasedOnRow(typeof(ApplicantRow), CheckNames = true)]
    public class ApplicantColumns
    {
        [EditLink]
        [Width(150)]
        public String Name { get; set; }
        [Width(150)]
        public String Number { get; set; }
        [Width(150)]
        public String Phone { get; set; }
        [SortOrder(1, descending: true)]
        [Width(200)]
        public String VacancyNumber { get; set; }
        [Width(200)]
        public String HiringManagerName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}