using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Forms
{
    [FormScript("Performance.Appraisal")]
    [BasedOnRow(typeof(AppraisalRow), CheckNames = true)]
    public class AppraisalForm
    {
        [Tab("General")]
        [Category("Appraisal")]
        public String Number { get; set; }
        [HalfWidth]
        public Int32 EmployeeId { get; set; }
        [HalfWidth]
        public Int32 EvaluatorId { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Dates")]
        [DefaultValue("now")]
        [HalfWidth]
        public DateTime CurrentAppraisalDate { get; set; }
        [DefaultValue("now")]
        [HalfWidth]
        public DateTime LastAppraisalDate { get; set; }


        [Category("Details")]
        [AppraisalDetailEditor]
        public List<AppraisalDetailRow> AppraisalDetailList { get; set; }


        [Tab("Results")]
        [Category("Info")]
        [TextAreaEditor(Rows = 3)]
        public String Comment { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Recomendation { get; set; }
    }
}