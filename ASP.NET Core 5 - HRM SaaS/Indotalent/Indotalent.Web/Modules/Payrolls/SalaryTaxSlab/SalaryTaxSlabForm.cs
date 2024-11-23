using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.SalaryTaxSlab")]
    [BasedOnRow(typeof(SalaryTaxSlabRow), CheckNames = true)]
    public class SalaryTaxSlabForm
    {
        [Tab("General")]
        [Category("Salary Tax Slab")]
        public Decimal From { get; set; }
        public Decimal To { get; set; }
        public Decimal ExemptedAmount { get; set; }
        public Decimal Rate { get; set; }
    }
}
