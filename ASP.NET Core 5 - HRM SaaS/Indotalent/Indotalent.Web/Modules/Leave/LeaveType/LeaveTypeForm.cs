using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Leave.Forms
{
    [FormScript("Leave.LeaveType")]
    [BasedOnRow(typeof(LeaveTypeRow), CheckNames = true)]
    public class LeaveTypeForm
    {
        [Tab("General")]
        [Category("Leave Type")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}