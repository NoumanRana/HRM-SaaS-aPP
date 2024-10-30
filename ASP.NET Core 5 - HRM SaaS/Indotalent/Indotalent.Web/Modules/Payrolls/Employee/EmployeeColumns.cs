using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.Employee")]
    [BasedOnRow(typeof(EmployeeRow), CheckNames = true)]
    public class EmployeeColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(150)]
        public String Name { get; set; }
        [Width(150)]
        public String EmployeeNumber { get; set; }
        [Width(150)]
        public String Email { get; set; }
        [Width(150)]
        public String DepartmentName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}