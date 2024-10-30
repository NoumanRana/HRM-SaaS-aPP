using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Columns
{
    [ColumnsScript("Operation.Asset")]
    [BasedOnRow(typeof(AssetRow), CheckNames = true)]
    public class AssetColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(200)]
        public String Number { get; set; }
        [Width(150)]
        public DateTime PurchaseDate { get; set; }
        [Width(150)]
        public Double PurchasePrice { get; set; }
        [Width(150)]
        public String Manufacturer { get; set; }
        [Width(150)]
        public String Model { get; set; }
        [Width(150)]
        public Int32 ProductionYear { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}