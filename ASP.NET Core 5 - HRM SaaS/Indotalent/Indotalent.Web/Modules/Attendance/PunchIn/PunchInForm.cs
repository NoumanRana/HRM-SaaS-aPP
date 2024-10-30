using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Attendance.Forms
{
    [FormScript("Attendance.PunchIn")]
    [BasedOnRow(typeof(PunchInRow), CheckNames = true)]
    public class PunchInForm
    {
        [Tab("General")]
        [Category("Employee")]
        public Int32 EmployeeId { get; set; }

        [Category("Date")]
        [DefaultValue("now")]
        public DateTime PunchDate { get; set; }

        [Category("Punch In")]
        [HalfWidth]
        public Int32 InHour { get; set; }
        [HalfWidth]
        public Int32 InMinute { get; set; }
    }
}