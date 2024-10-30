using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.Warning")]
    [BasedOnRow(typeof(WarningRow), CheckNames = true)]
    public class WarningColumns
    {
        [EditLink]
        [Width(200)]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        [Width(200)]
        public DateTime WarningDate { get; set; }
        [Width(200)]
        public DateTime CorrectiveDate { get; set; }
        [Width(200)]
        public String EmployeeName { get; set; }
        [Width(200)]
        public String SupervisorName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}