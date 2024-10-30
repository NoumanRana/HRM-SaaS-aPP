using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.EmployeeOkrObjective")]
    [BasedOnRow(typeof(EmployeeOkrObjectiveRow), CheckNames = true)]
    public class EmployeeOkrObjectiveColumns
    {
        [EditLink]
        [Width(400)]
        public String Objective { get; set; }
    }
}