using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.PayrollDetail")]
    [BasedOnRow(typeof(PayrollDetailRow), CheckNames = true)]
    public class PayrollDetailColumns
    {
        [EditLink]
        [Width(200)]
        public String EmployeeName { get; set; }
        [Width(200)]
        public Double BasicSalary { get; set; }
        [Width(200)]
        public Double TotalIncome { get; set; }
        [Width(200)]
        public Double TotalDeduction { get; set; }
        [Width(200)]
        public Double TakeHomePay { get; set; }
    }
}