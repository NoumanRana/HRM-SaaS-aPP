using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.Deduction")]
    [BasedOnRow(typeof(DeductionRow), CheckNames = true)]
    public class DeductionColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String TenantName { get; set; }

        public Decimal DeductionRate { get; set; }
    }

}