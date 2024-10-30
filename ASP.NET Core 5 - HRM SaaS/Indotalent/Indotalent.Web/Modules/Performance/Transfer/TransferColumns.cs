using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Columns
{
    [ColumnsScript("Performance.Transfer")]
    [BasedOnRow(typeof(TransferRow), CheckNames = true)]
    public class TransferColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(200)]
        public String Number { get; set; }
        [Width(150)]
        public String EmployeeName { get; set; }
        [Width(150)]
        public DateTime EffectiveDate { get; set; }
        [Width(150)]
        public String PromotorName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}