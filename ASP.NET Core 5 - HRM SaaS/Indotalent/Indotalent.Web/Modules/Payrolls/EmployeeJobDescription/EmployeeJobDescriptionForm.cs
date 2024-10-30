using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.EmployeeJobDescription")]
    [BasedOnRow(typeof(EmployeeJobDescriptionRow), CheckNames = true)]
    public class EmployeeJobDescriptionForm
    {
        [Tab("General")]
        [Category("JobDesc Info")]
        public String JobDescription { get; set; }
    }
}