using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.EmployeeParent")]
    [BasedOnRow(typeof(EmployeeParentRow), CheckNames = true)]
    public class EmployeeParentColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String Phone { get; set; }
    }
}