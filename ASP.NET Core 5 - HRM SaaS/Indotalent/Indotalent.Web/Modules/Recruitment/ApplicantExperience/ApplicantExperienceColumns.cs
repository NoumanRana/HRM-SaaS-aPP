using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Columns
{
    [ColumnsScript("Recruitment.ApplicantExperience")]
    [BasedOnRow(typeof(ApplicantExperienceRow), CheckNames = true)]
    public class ApplicantExperienceColumns
    {
        [EditLink]
        [Width(150)]
        public String CompanyName { get; set; }
        [Width(150)]
        public String Position { get; set; }
        [Width(150)]
        public DateTime StartDate { get; set; }
        [Width(150)]
        public DateTime EndDate { get; set; }
        [Width(150)]
        public Double Salary { get; set; }
    }
}