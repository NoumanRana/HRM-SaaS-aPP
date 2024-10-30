using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.EmployeeChildren")]
    [BasedOnRow(typeof(EmployeeChildrenRow), CheckNames = true)]
    public class EmployeeChildrenColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String Phone { get; set; }
    }
}