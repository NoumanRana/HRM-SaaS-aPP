using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Organization.Columns
{
    [ColumnsScript("Organization.Department")]
    [BasedOnRow(typeof(DepartmentRow), CheckNames = true)]
    public class DepartmentColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}