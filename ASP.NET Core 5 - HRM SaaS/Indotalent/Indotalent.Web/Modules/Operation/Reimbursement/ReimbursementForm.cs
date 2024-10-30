using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Forms
{
    [FormScript("Operation.Reimbursement")]
    [BasedOnRow(typeof(ReimbursementRow), CheckNames = true)]
    public class ReimbursementForm
    {
        [Tab("General")]
        [Category("Reimbursement Info")]
        public String Number { get; set; }
        [DefaultValue("now")]
        public DateTime TransactionDate { get; set; }
        public Int32 ReimbursementStatus { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Employee")]
        public Int32 EmployeeId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 DepartmentId { get; set; }

        [Category("Supervisor")]
        public Int32 SupervisorId { get; set; }

        [Category("Currency")]
        public String CurrencyName { get; set; }

        [Category("Details")]
        [ReimbursementDetailEditor]
        public List<ReimbursementDetailRow> ItemList { get; set; }

        [Category("Amount")]
        public Double TotalAmount { get; set; }
    }
}