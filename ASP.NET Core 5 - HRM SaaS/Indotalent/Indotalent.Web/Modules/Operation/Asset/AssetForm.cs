using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Forms
{
    [FormScript("Operation.Asset")]
    [BasedOnRow(typeof(AssetRow), CheckNames = true)]
    public class AssetForm
    {
        [Tab("General")]
        [Category("Asset")]
        public String Number { get; set; }
        public String AssetTagNumber { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Procurement")]
        [DefaultValue("now")]
        public DateTime PurchaseDate { get; set; }
        public Double PurchasePrice { get; set; }
        public String PurchaseOrderNumber { get; set; }
        public String PurchaseOrderBill { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String SupportCenter { get; set; }

        [Category("Manufactur")]
        public String Manufacturer { get; set; }
        public String Model { get; set; }
        public String SerialNumber { get; set; }
        public Int32 ProductionYear { get; set; }

        [Category("Images")]
        public String Images { get; set; }
    }
}