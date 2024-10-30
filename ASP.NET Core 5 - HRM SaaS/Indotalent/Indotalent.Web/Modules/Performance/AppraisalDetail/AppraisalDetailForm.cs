using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Forms
{
    [FormScript("Performance.AppraisalDetail")]
    [BasedOnRow(typeof(AppraisalDetailRow), CheckNames = true)]
    public class AppraisalDetailForm
    {
        [Tab("General")]
        [Category("Evaluation")]
        public Int32 EvaluationId { get; set; }
        public String EvaluationNumber { get; set; }
        public String EvaluationGroup { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String EvaluationIndicator { get; set; }

        [Category("Result")]
        public Int32 EvaluationResult { get; set; }
    }
}