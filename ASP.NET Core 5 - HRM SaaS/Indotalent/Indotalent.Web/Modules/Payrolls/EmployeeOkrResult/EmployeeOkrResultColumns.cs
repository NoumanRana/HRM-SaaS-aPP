using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.EmployeeOkrResult")]
    [BasedOnRow(typeof(EmployeeOkrResultRow), CheckNames = true)]
    public class EmployeeOkrResultColumns
    {
        [EditLink]
        [Width(400)]
        public String Result { get; set; }
    }
}