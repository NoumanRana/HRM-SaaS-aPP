using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Columns
{
    [ColumnsScript("Operation.Holiday")]
    [BasedOnRow(typeof(HolidayRow), CheckNames = true)]
    public class HolidayColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [SortOrder(1, descending: true)]
        [Width(200)]
        public DateTime Date { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}