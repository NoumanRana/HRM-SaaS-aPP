using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.EmployeeSelfService
{
    public partial class MeetingParticipantEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.EmployeeSelfService.MeetingParticipantEditor";

        public MeetingParticipantEditorAttribute()
            : base(Key)
        {
        }
    }
}
