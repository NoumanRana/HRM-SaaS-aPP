using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.PayrollDetailIncome")]
    [BasedOnRow(typeof(PayrollDetailIncomeRow), CheckNames = true)]
    public class PayrollDetailIncomeColumns
    {
        [EditLink]
        [Width(200)]
        public String IncomeName { get; set; }
        [Width(200)]
        public Double Amount { get; set; }
    }
}