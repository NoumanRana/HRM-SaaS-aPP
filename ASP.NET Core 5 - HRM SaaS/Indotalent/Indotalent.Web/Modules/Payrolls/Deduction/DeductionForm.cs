using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.Deduction")]
    [BasedOnRow(typeof(DeductionRow), CheckNames = true)]
    public class DeductionForm
    {
        [Tab("General")]
        [Category("Deduction")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}