using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Forms
{
    [FormScript("Recruitment.ApplicantExperience")]
    [BasedOnRow(typeof(ApplicantExperienceRow), CheckNames = true)]
    public class ApplicantExperienceForm
    {
        [Tab("General")]
        [Category("Previous Company")]
        public String CompanyName { get; set; }
        public String Position { get; set; }
        [Category("Period")]
        [DefaultValue("now")]
        public DateTime StartDate { get; set; }
        [DefaultValue("now")]
        public DateTime EndDate { get; set; }
        [Category("Take Home Pay")]
        public Double Salary { get; set; }
    }
}