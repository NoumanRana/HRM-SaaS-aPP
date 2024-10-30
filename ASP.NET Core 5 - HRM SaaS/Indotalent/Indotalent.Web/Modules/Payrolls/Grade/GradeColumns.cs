using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.Grade")]
    [BasedOnRow(typeof(GradeRow), CheckNames = true)]
    public class GradeColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(100)]
        public String CurrencyName { get; set; }
        [Width(200)]
        public Double BasicSalary { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}