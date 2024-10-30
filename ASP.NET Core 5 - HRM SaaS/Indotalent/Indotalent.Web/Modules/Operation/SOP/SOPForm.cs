using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Forms
{
    [FormScript("Operation.SOP")]
    [BasedOnRow(typeof(SOPRow), CheckNames = true)]
    public class SOPForm
    {
        [Tab("General")]
        [Category("SOP Info")]
        public String Number { get; set; }
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Documents")]
        public String Reference { get; set; }
    }
}