using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Columns
{
    [ColumnsScript("Operation.Termination")]
    [BasedOnRow(typeof(TerminationRow), CheckNames = true)]
    public class TerminationColumns
    {
        [EditLink]
        [Width(200)]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        [Width(200)]
        public DateTime TerminationDate { get; set; }
        [Width(200)]
        public DateTime EffectiveDate { get; set; }
        [Width(200)]
        public String EmployeeName { get; set; }
        [Width(200)]
        public String SupervisorName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}