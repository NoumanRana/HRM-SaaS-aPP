using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Columns
{
    [ColumnsScript("Performance.Appraisal")]
    [BasedOnRow(typeof(AppraisalRow), CheckNames = true)]
    public class AppraisalColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(200)]
        public String Number { get; set; }
        [Width(150)]
        public String EmployeeName { get; set; }
        [Width(150)]
        public String EvaluatorName { get; set; }
        [Width(150)]
        public DateTime CurrentAppraisalDate { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}