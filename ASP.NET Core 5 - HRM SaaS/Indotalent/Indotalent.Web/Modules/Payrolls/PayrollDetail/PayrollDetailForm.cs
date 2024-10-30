using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.PayrollDetail")]
    [BasedOnRow(typeof(PayrollDetailRow), CheckNames = true)]
    public class PayrollDetailForm
    {
        [Tab("General")]
        [Category("Employee Info")]
        public Int32 Id { get; set; }
        public Int32 EmployeeId { get; set; }
        public String BankAccount { get; set; }
        public String BankName { get; set; }

        [Category("Payroll Components")]
        [PayrollDetailIncomeEditor]
        public List<PayrollDetailIncomeRow> IncomeList { get; set; }
        [PayrollDetailDeductionEditor]
        public List<PayrollDetailDeductionRow> DeductionList { get; set; }


        [Category("Summary")]
        public Double BasicSalary { get; set; }
        public Double TotalIncome { get; set; }
        public Double TotalDeduction { get; set; }
        public Double TakeHomePay { get; set; }
    }
}