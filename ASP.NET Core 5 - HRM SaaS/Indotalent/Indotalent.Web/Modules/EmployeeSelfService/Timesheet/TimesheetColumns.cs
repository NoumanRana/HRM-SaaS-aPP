using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.Timesheet")]
    [BasedOnRow(typeof(TimesheetRow), CheckNames = true)]
    public class TimesheetColumns
    {
        [Width(150)]
        public DateTime CalendarDate { get; set; }
        [Width(150)]
        public String EmployeeNumber { get; set; }
        [Width(150)]
        public String EmployeeName { get; set; }
        [Width(150)]
        public DateTime PunchIn { get; set; }
        [Width(150)]
        public DateTime PunchOut { get; set; }
        [Width(150)]
        public Double WorkingDuration { get; set; }
        [Width(150)]
        public Double OvertimeDuration { get; set; }

    }
}