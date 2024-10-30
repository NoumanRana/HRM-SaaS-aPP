using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Forms
{
    [FormScript("Recruitment.VacancyBenefit")]
    [BasedOnRow(typeof(VacancyBenefitRow), CheckNames = true)]
    public class VacancyBenefitForm
    {
        [Tab("General")]
        [Category("Job Requirement")]
        public String ShortNote { get; set; }
    }
}