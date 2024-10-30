using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Indotalent.Attendance
{
    [EnumKey("Attendance.OvertimeStatus")]
    public enum OvertimeStatus
    {
        [Description("Submit")]
        Submit = 1,
        [Description("Approve")]
        Approve = 2
    }
}
