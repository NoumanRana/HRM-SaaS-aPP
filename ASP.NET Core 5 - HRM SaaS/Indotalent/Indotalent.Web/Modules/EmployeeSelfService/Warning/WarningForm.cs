using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.Warning")]
    [BasedOnRow(typeof(WarningRow), CheckNames = true)]
    public class WarningForm
    {
        [Tab("General")]
        [Category("Warning Info")]
        public String Number { get; set; }
        public DateTime WarningDate { get; set; }
        public DateTime CorrectiveDate { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Reasons")]
        public String WarningReason { get; set; }
        [Category("Corrective")]
        public String CorrectiveAction { get; set; }

        [Category("Warned Employee")]
        public Int32 EmployeeId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 DepartmentId { get; set; }

        [Category("Supervisor")]
        public Int32 SupervisorId { get; set; }
    }
}