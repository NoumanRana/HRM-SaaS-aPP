using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.EmployeeKpi")]
    [BasedOnRow(typeof(EmployeeKpiRow), CheckNames = true)]
    public class EmployeeKpiForm
    {
        [Tab("General")]
        [Category("KPI Info")]
        public String KpiDescription { get; set; }
        public Double KpiIndicator { get; set; }
        public String KpiUnit { get; set; }
    }
}