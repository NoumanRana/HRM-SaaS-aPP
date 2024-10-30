using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.EmployeeDeduction")]
    [BasedOnRow(typeof(EmployeeDeductionRow), CheckNames = true)]
    public class EmployeeDeductionForm
    {
        [Tab("General")]
        [Category("Deduction Info")]
        public Int32 DeductionId { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        [Category("Deduction Amount")]
        public Double Amount { get; set; }
    }
}