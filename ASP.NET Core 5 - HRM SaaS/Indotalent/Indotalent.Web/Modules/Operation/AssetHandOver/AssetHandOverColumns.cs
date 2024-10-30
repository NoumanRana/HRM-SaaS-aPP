using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Columns
{
    [ColumnsScript("Operation.AssetHandOver")]
    [BasedOnRow(typeof(AssetHandOverRow), CheckNames = true)]
    public class AssetHandOverColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(200)]
        public String Number { get; set; }
        [Width(150)]
        public String AssetNumber { get; set; }
        [Width(150)]
        public DateTime HandOverDate { get; set; }
        [Width(150)]
        public String HandOverByName { get; set; }
        [Width(150)]
        public String HandOverToName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}