using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.BusinessTrip")]
    [BasedOnRow(typeof(BusinessTripRow), CheckNames = true)]
    public class BusinessTripColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [SortOrder(1, descending: true)]
        [Width(200)]
        public DateTime StartDate { get; set; }
        [Width(200)]
        public DateTime EndDate { get; set; }
        [Width(200)]
        public String Location { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}