using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.Income")]
    [BasedOnRow(typeof(IncomeRow), CheckNames = true)]
    public class IncomeForm
    {
        [Tab("General")]
        [Category("Income")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}