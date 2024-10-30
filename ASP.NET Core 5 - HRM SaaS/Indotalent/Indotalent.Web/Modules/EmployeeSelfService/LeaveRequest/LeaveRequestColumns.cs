using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.LeaveRequest")]
    [BasedOnRow(typeof(LeaveRequestRow), CheckNames = true)]
    public class LeaveRequestColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(150)]
        public String Number { get; set; }
        [Width(150)]
        public DateTime FromDate { get; set; }
        [Width(150)]
        public DateTime ToDate { get; set; }
        [Width(100)]
        public Double Duration { get; set; }
        [Width(150)]
        public String EmployeeName { get; set; }
        [Width(100)]
        public Int32 LeaveRequestStatus { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}