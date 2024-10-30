using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Forms
{
    [FormScript("Recruitment.ApplicantEducation")]
    [BasedOnRow(typeof(ApplicantEducationRow), CheckNames = true)]
    public class ApplicantEducationForm
    {
        [Tab("General")]
        [Category("School Info")]
        public String SchoolName { get; set; }
        public String StudyMajor { get; set; }
        public String Grade { get; set; }
        [Category("Note")]
        public String ShortNote { get; set; }
        [Category("Period")]
        [DefaultValue("now")]
        public DateTime StartDate { get; set; }
        [DefaultValue("now")]
        public DateTime EndDate { get; set; }
    }
}