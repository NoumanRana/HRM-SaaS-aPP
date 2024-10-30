using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Columns
{
    [ColumnsScript("Recruitment.VacancyBenefit")]
    [BasedOnRow(typeof(VacancyBenefitRow), CheckNames = true)]
    public class VacancyBenefitColumns
    {
        [SortOrder(1, descending: false)]
        [EditLink]
        [Width(300)]
        public String ShortNote { get; set; }
    }
}