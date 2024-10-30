using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.Overtime")]
    [BasedOnRow(typeof(OvertimeRow), CheckNames = true)]
    public class OvertimeColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(150)]
        public DateTime OvertimeDate { get; set; }

        [Width(150)]
        public String EmployeeName { get; set; }

        [Width(150)]
        public OvertimeStatus OvertimeStatus { get; set; }

        [Width(150)]
        public Double Duration { get; set; }
    }
}