using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Performance
{
    public partial class PromotionReasonEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Performance.PromotionReasonEditor";

        public PromotionReasonEditorAttribute()
            : base(Key)
        {
        }
    }
}
