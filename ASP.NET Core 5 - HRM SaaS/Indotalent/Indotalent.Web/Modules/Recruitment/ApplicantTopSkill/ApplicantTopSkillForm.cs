using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Forms
{
    [FormScript("Recruitment.ApplicantTopSkill")]
    [BasedOnRow(typeof(ApplicantTopSkillRow), CheckNames = true)]
    public class ApplicantTopSkillForm
    {
        [Tab("General")]
        [Category("Skill Info")]
        public String SkillName { get; set; }
        [Category("Score")]
        public Int32 ProficiencyScore { get; set; }
    }
}