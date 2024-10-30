﻿using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Indotalent.Leave
{
    [EnumKey("Leave.LeaveRequestStatus")]
    public enum LeaveRequestStatus
    {
        [Description("Submit")]
        Submit = 1,
        [Description("Approve")]
        Approve = 2
    }
}
