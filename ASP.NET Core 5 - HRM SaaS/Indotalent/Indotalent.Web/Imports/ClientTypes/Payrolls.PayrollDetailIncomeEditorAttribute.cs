using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Payrolls
{
    public partial class PayrollDetailIncomeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Payrolls.PayrollDetailIncomeEditor";

        public PayrollDetailIncomeEditorAttribute()
            : base(Key)
        {
        }
    }
}
