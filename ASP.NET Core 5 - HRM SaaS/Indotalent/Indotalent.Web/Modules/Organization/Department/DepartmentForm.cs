using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Organization.Forms
{
    [FormScript("Organization.Department")]
    [BasedOnRow(typeof(DepartmentRow), CheckNames = true)]
    public class DepartmentForm
    {
        [Tab("General")]
        [Category("Department")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}