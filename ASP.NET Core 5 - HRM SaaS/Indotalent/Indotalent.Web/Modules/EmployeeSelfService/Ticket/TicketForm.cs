using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.Ticket")]
    [BasedOnRow(typeof(TicketRow), CheckNames = true)]
    public class TicketForm
    {
        [Tab("General")]
        [Category("Ticket Info")]
        public String Number { get; set; }
        [DefaultValue("now")]
        public DateTime TicketDate { get; set; }
        public Int32 EmployeeId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 DepartmentId { get; set; }
        public Int32 SupervisorId { get; set; }

        [Category("Message")]
        public String Request { get; set; }

        [Category("Responses")]
        [TicketDetailEditor]
        public List<TicketDetailRow> ItemList { get; set; }
    }
}