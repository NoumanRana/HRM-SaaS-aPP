using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.EmployeeOkrResult")]
    [BasedOnRow(typeof(EmployeeOkrResultRow), CheckNames = true)]
    public class EmployeeOkrResultForm
    {
        [Tab("General")]
        [Category("OKR Result")]
        public String Result { get; set; }
    }
}