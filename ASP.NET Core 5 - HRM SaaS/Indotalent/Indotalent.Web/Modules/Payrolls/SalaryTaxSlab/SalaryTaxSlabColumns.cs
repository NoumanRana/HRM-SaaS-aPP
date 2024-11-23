using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.SalaryTaxSlab")]
    [BasedOnRow(typeof(SalaryTaxSlabRow), CheckNames = true)]
    public class SalaryTaxSlabColumns
    {
        [EditLink]
        [Width(150)]
        public Int32 TaxSlabId { get; set; }

        [Width(200)]
        public Decimal From { get; set; }

        [Width(200)]
        public Decimal To { get; set; }

        [Width(200)]
        public Decimal ExemptedAmount { get; set; }

        [Width(100)]
        public Decimal Rate { get; set; }
    }
}
