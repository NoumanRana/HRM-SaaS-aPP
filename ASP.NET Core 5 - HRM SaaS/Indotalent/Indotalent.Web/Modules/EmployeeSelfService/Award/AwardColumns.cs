using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.Award")]
    [BasedOnRow(typeof(AwardRow), CheckNames = true)]
    public class AwardColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [SortOrder(1, descending: true)]
        [Width(200)]
        public DateTime Date { get; set; }
        [Width(200)]
        public String AwardeeName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}