using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.EmployeeIncome")]
    [BasedOnRow(typeof(EmployeeIncomeRow), CheckNames = true)]
    public class EmployeeIncomeForm
    {
        [Tab("General")]
        [Category("Income Info")]
        public Int32 IncomeId { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        [Category("Income Amount")]
        public Double Amount { get; set; }
    }
}