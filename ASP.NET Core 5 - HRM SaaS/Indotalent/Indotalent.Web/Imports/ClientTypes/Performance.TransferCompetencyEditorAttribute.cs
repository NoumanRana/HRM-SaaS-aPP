using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Performance
{
    public partial class TransferCompetencyEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Performance.TransferCompetencyEditor";

        public TransferCompetencyEditorAttribute()
            : base(Key)
        {
        }
    }
}
