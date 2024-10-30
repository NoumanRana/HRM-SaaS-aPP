using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Columns
{
    [ColumnsScript("Performance.PromotionCompetency")]
    [BasedOnRow(typeof(PromotionCompetencyRow), CheckNames = true)]
    public class PromotionCompetencyColumns
    {
        [SortOrder(1, descending: false)]
        [EditLink]
        [Width(300)]
        public String ShortNote { get; set; }
    }
}