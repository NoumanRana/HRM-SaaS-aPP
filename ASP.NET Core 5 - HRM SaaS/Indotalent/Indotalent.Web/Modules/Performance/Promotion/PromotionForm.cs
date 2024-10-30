using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Forms
{
    [FormScript("Performance.Promotion")]
    [BasedOnRow(typeof(PromotionRow), CheckNames = true)]
    public class PromotionForm
    {
        [Tab("General")]
        [Category("Promotion")]
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
        [Category("Promotion Reasons")]
        [PromotionReasonEditor]
        public List<PromotionReasonRow> PromotionReasonList { get; set; }

        [Tab("Competencies")]
        [Category("Promotion Competencies")]
        [PromotionCompetencyEditor]
        public List<PromotionCompetencyRow> PromotionCompetencyList { get; set; }
    }
}