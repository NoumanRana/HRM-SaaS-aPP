using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Attendance.Columns
{
    [ColumnsScript("Attendance.Overtime")]
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
        [Width(200)]
        public String TenantName { get; set; }
    }
}