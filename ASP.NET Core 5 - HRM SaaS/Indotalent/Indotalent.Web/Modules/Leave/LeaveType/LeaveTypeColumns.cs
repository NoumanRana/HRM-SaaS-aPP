using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Leave.Columns
{
    [ColumnsScript("Leave.LeaveType")]
    [BasedOnRow(typeof(LeaveTypeRow), CheckNames = true)]
    public class LeaveTypeColumns
    {
        [EditLink]
        [Width(150)]
        public String Name { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}