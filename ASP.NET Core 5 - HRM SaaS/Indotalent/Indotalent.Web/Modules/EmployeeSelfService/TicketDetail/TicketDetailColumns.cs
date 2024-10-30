using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.TicketDetail")]
    [BasedOnRow(typeof(TicketDetailRow), CheckNames = true)]
    public class TicketDetailColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(200)]
        public DateTime ResponseAt { get; set; }

        [EditLink]
        [Width(200)]
        public String ResponseBy { get; set; }
    }
}