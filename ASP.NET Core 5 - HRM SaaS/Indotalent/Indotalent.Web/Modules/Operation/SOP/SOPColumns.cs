using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Columns
{
    [ColumnsScript("Operation.SOP")]
    [BasedOnRow(typeof(SOPRow), CheckNames = true)]
    public class SOPColumns
    {
        [EditLink]
        [Width(200)]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}