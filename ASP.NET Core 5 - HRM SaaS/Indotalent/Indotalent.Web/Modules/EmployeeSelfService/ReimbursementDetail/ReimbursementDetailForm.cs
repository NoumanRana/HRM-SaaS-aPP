using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.ReimbursementDetail")]
    [BasedOnRow(typeof(ReimbursementDetailRow), CheckNames = true)]
    public class ReimbursementDetailForm
    {
        [Tab("General")]
        [Category("Main")]
        public String ShortNote { get; set; }

        [Category("Reimburse Amount")]
        public Double Amount { get; set; }
    }
}