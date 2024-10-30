using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Columns
{
    [ColumnsScript("Operation.Complaint")]
    [BasedOnRow(typeof(ComplaintRow), CheckNames = true)]
    public class ComplaintColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(150)]
        public String Number { get; set; }
        [Width(200)]
        public DateTime IncidentDate { get; set; }
        [Width(200)]
        public String ReporterName { get; set; }
        [Width(150)]
        public String BranchName { get; set; }
        [Width(150)]
        public String DepartmentName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}