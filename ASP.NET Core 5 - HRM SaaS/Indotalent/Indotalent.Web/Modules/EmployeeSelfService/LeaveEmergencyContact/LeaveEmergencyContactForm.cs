using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.LeaveEmergencyContact")]
    [BasedOnRow(typeof(LeaveEmergencyContactRow), CheckNames = true)]
    public class LeaveEmergencyContactForm
    {
        [Tab("General")]
        [Category("Emergency Contacts")]
        public String ContactName { get; set; }
        public String ContactPhoneNumber { get; set; }
    }
}