using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.PunchOut")]
    [BasedOnRow(typeof(PunchOutRow), CheckNames = true)]
    public class PunchOutForm
    {
        [Tab("General")]
        [Category("Employee")]
        public Int32 EmployeeId { get; set; }

        [Category("Date")]
        [DefaultValue("now")]
        public DateTime PunchDate { get; set; }

        [Category("Punch Out")]
        [HalfWidth]
        public Int32 OutHour { get; set; }
        [HalfWidth]
        public Int32 OutMinute { get; set; }
    }
}