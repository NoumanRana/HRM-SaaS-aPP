using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.LeaveEmergencyContact")]
    [BasedOnRow(typeof(LeaveEmergencyContactRow), CheckNames = true)]
    public class LeaveEmergencyContactColumns
    {
        [EditLink]
        [Width(200)]
        public String ContactName { get; set; }
        [Width(200)]
        public String ContactPhoneNumber { get; set; }
    }
}