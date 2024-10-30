using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.Payroll")]
    [BasedOnRow(typeof(PayrollRow), CheckNames = true)]
    public class PayrollForm
    {
        [Tab("General")]
        [Category("Payroll Period")]
        public String Number { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        [DefaultValue("now")]
        public DateTime PaymentDate { get; set; }
        public Boolean AutoGeneratePayrollDetail { get; set; }


        [Category("Payroll")]
        [PayrollDetailEditor]
        public List<PayrollDetailRow> ItemList { get; set; }

        [Category("Currency")]
        public String CurrencyName { get; set; }


        [Category("Summary")]
        public Double TotalBasicSalary { get; set; }
        public Double TotalIncome { get; set; }
        public Double TotalDeduction { get; set; }
        public Double TotalTakeHomePay { get; set; }

        [Category("Confirmed Transferred")]
        public Double TotalPaymentAmount { get; set; }
    }
}