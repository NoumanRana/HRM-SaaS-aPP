using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Forms
{
    [FormScript("Operation.Termination")]
    [BasedOnRow(typeof(TerminationRow), CheckNames = true)]
    public class TerminationForm
    {
        [Tab("General")]
        [Category("Termination Info")]
        public String Number { get; set; }
        public DateTime TerminationDate { get; set; }
        public DateTime EffectiveDate { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Reason")]
        public String TerminationReason { get; set; }
        [Category("Returned")]
        public String ReturnedItem { get; set; }
        [Category("Completed")]
        public String CompletedForm { get; set; }

        [Category("Terminated")]
        public Int32 EmployeeId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 DepartmentId { get; set; }

        [Category("Supervisor")]
        public Int32 SupervisorId { get; set; }
    }
}