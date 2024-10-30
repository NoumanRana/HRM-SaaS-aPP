using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Organization.Forms
{
    [FormScript("Organization.Designation")]
    [BasedOnRow(typeof(DesignationRow), CheckNames = true)]
    public class DesignationForm
    {
        [Tab("General")]
        [Category("Designation")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}