using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Attendance.Columns
{
    [ColumnsScript("Attendance.PunchIn")]
    [BasedOnRow(typeof(PunchInRow), CheckNames = true)]
    public class PunchInColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(150)]
        public DateTime PunchDate { get; set; }

        [Width(150)]
        public String EmployeeName { get; set; }

        [Width(150)]
        public DateTime PunchIn { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}