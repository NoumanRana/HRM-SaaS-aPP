using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.PayrollDetailIncome")]
    [BasedOnRow(typeof(PayrollDetailIncomeRow), CheckNames = true)]
    public class PayrollDetailIncomeForm
    {
        [Tab("General")]
        [Category("Income Info")]
        public Int32 IncomeId { get; set; }
        public String ShortNote { get; set; }
        [Category("Income Amount")]
        public Double Amount { get; set; }
    }
}