using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Forms
{
    [FormScript("Performance.Evaluation")]
    [BasedOnRow(typeof(EvaluationRow), CheckNames = true)]
    public class EvaluationForm
    {
        [Tab("General")]
        [Category("Evaluation")]
        public String Number { get; set; }
        public String Group { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Indicator { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}