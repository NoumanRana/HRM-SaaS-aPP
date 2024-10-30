using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Operation
{
    public partial class ReimbursementDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Operation.ReimbursementDetailEditor";

        public ReimbursementDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
