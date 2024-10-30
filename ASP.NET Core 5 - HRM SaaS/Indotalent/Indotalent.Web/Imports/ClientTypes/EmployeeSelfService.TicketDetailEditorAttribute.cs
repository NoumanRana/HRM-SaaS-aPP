using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.EmployeeSelfService
{
    public partial class TicketDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.EmployeeSelfService.TicketDetailEditor";

        public TicketDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
