using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Columns
{
    [ColumnsScript("Recruitment.VacancyRequirement")]
    [BasedOnRow(typeof(VacancyRequirementRow), CheckNames = true)]
    public class VacancyRequirementColumns
    {
        [SortOrder(1, descending: false)]
        [EditLink]
        [Width(300)]
        public String ShortNote { get; set; }
    }
}