using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.Overtime")]
    [BasedOnRow(typeof(OvertimeRow), CheckNames = true)]
    public class OvertimeForm
    {
        [Tab("General")]
        [Category("Employee")]
        public Int32 EmployeeId { get; set; }

        [Category("Date")]
        [DefaultValue("now")]
        public DateTime OvertimeDate { get; set; }

        [Category("Duration")]
        public Int32 Duration { get; set; }

        [Category("Information")]
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        public OvertimeStatus OvertimeStatus { get; set; }
    }
}