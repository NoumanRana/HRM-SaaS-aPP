using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Operation
{
    public partial class TrainingParticipantEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Operation.TrainingParticipantEditor";

        public TrainingParticipantEditorAttribute()
            : base(Key)
        {
        }
    }
}
