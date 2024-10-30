using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("Operation.Reimbursement")]
    [BasedOnRow(typeof(ReimbursementRow), CheckNames = true)]
    public class ReimbursementColumns
    {
        [EditLink]
        [Width(200)]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        [Width(150)]
        public DateTime TransactionDate { get; set; }
        [Width(150)]
        public Double TotalAmount { get; set; }
        [Width(150)]
        public String EmployeeName { get; set; }
        [Width(150)]
        public Int32 ReimbursementStatus { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}