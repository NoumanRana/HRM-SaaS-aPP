using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Indotalent.EmployeeSelfService
{
    [EnumKey("EmployeeSelfService.ReimbursementStatus")]
    public enum ReimbursementStatus
    {
        [Description("Submit")]
        Submit = 1,
        [Description("Approve")]
        Approve = 2
    }
}
