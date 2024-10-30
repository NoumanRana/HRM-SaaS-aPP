using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.Announcement")]
    [BasedOnRow(typeof(AnnouncementRow), CheckNames = true)]
    public class AnnouncementColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [SortOrder(1, descending: true)]
        [Width(200)]
        public DateTime Date { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}