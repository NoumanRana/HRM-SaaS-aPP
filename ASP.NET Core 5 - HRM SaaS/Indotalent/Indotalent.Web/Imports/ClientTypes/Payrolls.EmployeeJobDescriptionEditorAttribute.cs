using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Payrolls
{
    public partial class EmployeeJobDescriptionEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Payrolls.EmployeeJobDescriptionEditor";

        public EmployeeJobDescriptionEditorAttribute()
            : base(Key)
        {
        }
    }
}
