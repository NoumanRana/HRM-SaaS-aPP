using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.EmployeeDocument")]
    [BasedOnRow(typeof(EmployeeDocumentRow), CheckNames = true)]
    public class EmployeeDocumentForm
    {
        [Tab("General")]
        [Category("Document Info")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        [Category("Document Expired")]
        [DefaultValue("now")]
        public DateTime ExpiredDate { get; set; }
        [Category("Document Picture")]
        public String Picture { get; set; }
    }
}