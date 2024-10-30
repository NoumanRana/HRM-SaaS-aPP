using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Columns
{
    [ColumnsScript("Recruitment.InterviewResult")]
    [BasedOnRow(typeof(InterviewResultRow), CheckNames = true)]
    public class InterviewResultColumns
    {
        [EditLink]
        [Width(350)]
        public String ResultName { get; set; }
        [Width(150)]
        public Int32 ResultScore { get; set; }
    }
}