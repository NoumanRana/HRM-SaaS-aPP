using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.PayrollDetailDeduction")]
    [BasedOnRow(typeof(PayrollDetailDeductionRow), CheckNames = true)]
    public class PayrollDetailDeductionForm
    {
        [Tab("General")]
        [Category("Deduction Info")]
        public Int32 DeductionId { get; set; }
        public String ShortNote { get; set; }
        [Category("Deduction Amount")]
        public Double Amount { get; set; }
    }
}