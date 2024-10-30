using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Columns
{
    [ColumnsScript("Performance.Evaluation")]
    [BasedOnRow(typeof(EvaluationRow), CheckNames = true)]
    public class EvaluationColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(100)]
        public String Number { get; set; }
        [Width(100)]
        public String Group { get; set; }
        [Width(200)]
        public String Indicator { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}