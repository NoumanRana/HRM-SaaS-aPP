using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Columns
{
    [ColumnsScript("Recruitment.Vacancy")]
    [BasedOnRow(typeof(VacancyRow), CheckNames = true)]
    public class VacancyColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(200)]
        public String Number { get; set; }
        [Width(150)]
        public String JobTitle { get; set; }
        [Width(150)]
        public DateTime OpenDate { get; set; }
        [Width(150)]
        public DateTime CloseDate { get; set; }
        [Width(150)]
        public String HiringManagerName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}