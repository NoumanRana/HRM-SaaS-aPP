using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Forms
{
    [FormScript("Performance.Transfer")]
    [BasedOnRow(typeof(TransferRow), CheckNames = true)]
    public class TransferForm
    {
        [Tab("General")]
        [Category("Transfer")]
        public String Number { get; set; }
        [HalfWidth]
        public Int32 EmployeeId { get; set; }
        [HalfWidth]
        public Int32 PromotorId { get; set; }
        [DefaultValue("now")]
        public DateTime EffectiveDate { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Current Condition")]
        public Double CurrentBasicSalary { get; set; }
        public Int32 CurrentBranchId { get; set; }
        public Int32 CurrentDepartmentId { get; set; }
        public Int32 CurrentDesignationId { get; set; }
        public Int32 CurrentSupervisorId { get; set; }

        [Category("New Condition")]
        public Double NewBasicSalary { get; set; }
        public Int32 NewBranchId { get; set; }
        public Int32 NewDepartmentId { get; set; }
        public Int32 NewDesignationId { get; set; }
        public Int32 NewSupervisorId { get; set; }

        [Tab("Reasons")]
        [Category("Transfer Reasons")]
        [TransferReasonEditor]
        public List<TransferReasonRow> TransferReasonList { get; set; }

        [Tab("Competencies")]
        [Category("Transfer Competencies")]
        [TransferCompetencyEditor]
        public List<TransferCompetencyRow> TransferCompetencyList { get; set; }
    }
}