using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.BusinessTripParticipant")]
    [BasedOnRow(typeof(BusinessTripParticipantRow), CheckNames = true)]
    public class BusinessTripParticipantForm
    {
        [Tab("General")]
        [Category("Participant")]
        public Int32 EmployeeId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 DepartmentId { get; set; }
    }
}