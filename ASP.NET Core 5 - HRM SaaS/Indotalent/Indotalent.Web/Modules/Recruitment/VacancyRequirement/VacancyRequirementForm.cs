using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Forms
{
    [FormScript("Recruitment.VacancyRequirement")]
    [BasedOnRow(typeof(VacancyRequirementRow), CheckNames = true)]
    public class VacancyRequirementForm
    {
        [Tab("General")]
        [Category("Job Requirement")]
        public String ShortNote { get; set; }
    }
}