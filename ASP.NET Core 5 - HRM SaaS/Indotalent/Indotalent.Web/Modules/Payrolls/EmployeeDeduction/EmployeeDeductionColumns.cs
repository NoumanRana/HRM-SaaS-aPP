using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.EmployeeDeduction")]
    [BasedOnRow(typeof(EmployeeDeductionRow), CheckNames = true)]
    public class EmployeeDeductionColumns
    {
        [EditLink]
        [Width(200)]
        public String DeductionName { get; set; }
        [Width(200)]
        public Double Amount { get; set; }
    }
}