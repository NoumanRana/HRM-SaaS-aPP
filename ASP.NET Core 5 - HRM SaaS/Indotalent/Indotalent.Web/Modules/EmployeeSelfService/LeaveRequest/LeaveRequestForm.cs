using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using Indotalent.Leave;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.LeaveRequest")]
    [BasedOnRow(typeof(LeaveRequestRow), CheckNames = true)]
    public class LeaveRequestForm
    {
        [Tab("General")]
        [Category("Request")]
        public String Number { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        public Int32 LeaveTypeId { get; set; }
        public Int32 EmployeeId { get; set; }

        [Category("Dates")]
        [DefaultValue("now")]
        public DateTime FromDate { get; set; }
        [DefaultValue("now")]
        public DateTime ToDate { get; set; }
        public Double Duration { get; set; }

        [Category("Status")]
        public Int32 LeaveRequestStatus { get; set; }

        [Category("Delegation")]
        public Int32 DelegatedEmployeeId { get; set; }


        [Tab("Delegated Tasks")]
        [Category("Tasks")]
        [LeaveDelegatedTaskEditor]
        public List<LeaveDelegatedTaskRow> LeaveDelegatedTaskList { get; set; }


        [Tab("Emergency Contacts")]
        [Category("Contacts")]
        [LeaveEmergencyContactEditor]
        public List<LeaveEmergencyContactRow> LeaveEmergencyContactList { get; set; }
    }
}