using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Payrolls
{
    public partial class PayrollDetailDeductionEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Payrolls.PayrollDetailDeductionEditor";

        public PayrollDetailDeductionEditorAttribute()
            : base(Key)
        {
        }
    }
}
