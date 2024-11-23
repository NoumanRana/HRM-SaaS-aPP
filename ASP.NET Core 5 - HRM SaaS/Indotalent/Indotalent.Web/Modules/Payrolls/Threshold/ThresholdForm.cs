using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.Threshold")]
    [BasedOnRow(typeof(ThresholdRow), CheckNames = true)]
    public class ThresholdForm
    {
        [Tab("General")]
        [Category("Manage Threshold")]
        public String Name { get; set; }
        public Decimal Value { get; set; }
        public Boolean? IsActive { get; set; }
    }
}
