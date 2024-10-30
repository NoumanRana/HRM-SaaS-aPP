using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Organization.Columns
{
    [ColumnsScript("Organization.Designation")]
    [BasedOnRow(typeof(DesignationRow), CheckNames = true)]
    public class DesignationColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}