using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Columns
{
    [ColumnsScript("Operation.Resignation")]
    [BasedOnRow(typeof(ResignationRow), CheckNames = true)]
    public class ResignationColumns
    {
        [EditLink]
        [Width(200)]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        [Width(200)]
        public DateTime ResignationDate { get; set; }
        [Width(200)]
        public DateTime EffectiveDate { get; set; }
        [Width(200)]
        public String ResigneeName { get; set; }
        [Width(200)]
        public String DepartmentName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}