using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Settings.Forms
{
    [FormScript("Settings.Gender")]
    [BasedOnRow(typeof(GenderRow), CheckNames = true)]
    public class GenderForm
    {
        [Tab("General")]
        [Category("Gender")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}