using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Leave
{
    public partial class LeaveDelegatedTaskEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Leave.LeaveDelegatedTaskEditor";

        public LeaveDelegatedTaskEditorAttribute()
            : base(Key)
        {
        }
    }
}
