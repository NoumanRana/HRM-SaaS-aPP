using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.EmployeeKpi")]
    [BasedOnRow(typeof(EmployeeKpiRow), CheckNames = true)]
    public class EmployeeKpiColumns
    {
        [EditLink]
        [Width(350)]
        public String KpiDescription { get; set; }
        [Width(150)]
        public Double KpiIndicator { get; set; }
        [Width(150)]
        public String KpiUnit { get; set; }
    }
}