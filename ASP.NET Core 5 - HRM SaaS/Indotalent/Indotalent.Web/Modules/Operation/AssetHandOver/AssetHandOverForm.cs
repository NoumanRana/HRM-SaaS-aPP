using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Forms
{
    [FormScript("Operation.AssetHandOver")]
    [BasedOnRow(typeof(AssetHandOverRow), CheckNames = true)]
    public class AssetHandOverForm
    {
        [Tab("General")]
        [Category("Asset Hand Over")]
        public String Number { get; set; }
        [DefaultValue("now")]
        public DateTime HandOverDate { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Hand Over")]
        [HalfWidth]
        public Int32 HandOverById { get; set; }
        [HalfWidth]
        public Int32 HandOverToId { get; set; }

        [Category("Asset")]
        public Int32 AssetId { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String AssetDescription { get; set; }
        public String AssetTagNumber { get; set; }
        public String Manufacturer { get; set; }
        public String Model { get; set; }
        public String SerialNumber { get; set; }
        public Int32 ProductionYear { get; set; }
    }
}