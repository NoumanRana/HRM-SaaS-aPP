using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.Ticket")]
    [BasedOnRow(typeof(TicketRow), CheckNames = true)]
    public class TicketColumns
    {
        [EditLink]
        [Width(200)]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        [Width(200)]
        public DateTime TicketDate { get; set; }
        [Width(200)]
        public String EmployeeName { get; set; }
        [Width(200)]
        public String DepartmentName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}