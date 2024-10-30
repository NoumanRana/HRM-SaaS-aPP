using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.EmployeeDocument")]
    [BasedOnRow(typeof(EmployeeDocumentRow), CheckNames = true)]
    public class EmployeeDocumentColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public DateTime ExpiredDate { get; set; }
    }
}