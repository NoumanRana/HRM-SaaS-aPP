using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.EmployeeOkrObjective")]
    [BasedOnRow(typeof(EmployeeOkrObjectiveRow), CheckNames = true)]
    public class EmployeeOkrObjectiveForm
    {
        [Tab("General")]
        [Category("OKR Objective")]
        public String Objective { get; set; }
    }
}