using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Forms
{
    [FormScript("Recruitment.InterviewResult")]
    [BasedOnRow(typeof(InterviewResultRow), CheckNames = true)]
    public class InterviewResultForm
    {
        [Tab("General")]
        [Category("Result Info")]
        public String ResultName { get; set; }
        [Category("Score")]
        public Int32 ResultScore { get; set; }
    }
}