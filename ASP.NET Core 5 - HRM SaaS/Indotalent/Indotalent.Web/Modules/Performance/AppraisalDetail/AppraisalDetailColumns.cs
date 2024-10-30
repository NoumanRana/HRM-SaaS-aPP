using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Columns
{
    [ColumnsScript("Performance.AppraisalDetail")]
    [BasedOnRow(typeof(AppraisalDetailRow), CheckNames = true)]
    public class AppraisalDetailColumns
    {
        [SortOrder(1, descending: false)]
        [EditLink]
        [Width(150)]
        public String EvaluationNumber { get; set; }
        [Width(150)]
        public String EvaluationGroup { get; set; }
        [Width(300)]
        public String EvaluationIndicator { get; set; }
        [Width(100)]
        public Int32 EvaluationResult { get; set; }
    }
}