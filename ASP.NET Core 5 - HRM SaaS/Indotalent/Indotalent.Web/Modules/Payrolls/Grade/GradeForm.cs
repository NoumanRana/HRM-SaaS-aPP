using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.Grade")]
    [BasedOnRow(typeof(GradeRow), CheckNames = true)]
    public class GradeForm
    {
        [Tab("General")]
        [Category("Grade")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        [Category("Currency")]
        public string CurrencyName { get; set; }

        [Category("Basic Salary")]
        public Double BasicSalary { get; set; }
    }
}