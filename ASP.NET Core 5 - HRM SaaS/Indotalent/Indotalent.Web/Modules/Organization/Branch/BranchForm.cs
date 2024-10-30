using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Organization.Forms
{
    [FormScript("Organization.Branch")]
    [BasedOnRow(typeof(BranchRow), CheckNames = true)]
    public class BranchForm
    {
        [Tab("General")]
        [Category("Branch")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}