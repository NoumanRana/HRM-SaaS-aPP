using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.EmployeeJobDescription")]
    [BasedOnRow(typeof(EmployeeJobDescriptionRow), CheckNames = true)]
    public class EmployeeJobDescriptionColumns
    {
        [EditLink]
        [Width(400)]
        public String JobDescription { get; set; }
    }
}