using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.Payroll")]
    [BasedOnRow(typeof(PayrollRow), CheckNames = true)]
    public class PayrollColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(200)]
        public String Number { get; set; }
        [Width(200)]
        public DateTime PaymentDate { get; set; }
        [Width(200)]
        public Double TotalBasicSalary { get; set; }
        [Width(200)]
        public Double TotalIncome { get; set; }
        [Width(200)]
        public Double TotalDeduction { get; set; }
        [Width(200)]
        public Double TotalTakeHomePay { get; set; }
        [Width(200)]
        public Double TotalPaymentAmount { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}