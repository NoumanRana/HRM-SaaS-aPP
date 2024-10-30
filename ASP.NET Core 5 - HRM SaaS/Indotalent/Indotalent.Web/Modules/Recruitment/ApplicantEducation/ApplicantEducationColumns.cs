using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Columns
{
    [ColumnsScript("Recruitment.ApplicantEducation")]
    [BasedOnRow(typeof(ApplicantEducationRow), CheckNames = true)]
    public class ApplicantEducationColumns
    {
        [EditLink]
        [Width(150)]
        public String SchoolName { get; set; }
        [Width(150)]
        public String StudyMajor { get; set; }
        [Width(150)]
        public String Grade { get; set; }
        [Width(150)]
        public DateTime StartDate { get; set; }
        [Width(150)]
        public DateTime EndDate { get; set; }
    }
}