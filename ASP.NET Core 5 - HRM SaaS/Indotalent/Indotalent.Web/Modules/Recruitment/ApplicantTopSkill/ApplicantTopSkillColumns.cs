using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Columns
{
    [ColumnsScript("Recruitment.ApplicantTopSkill")]
    [BasedOnRow(typeof(ApplicantTopSkillRow), CheckNames = true)]
    public class ApplicantTopSkillColumns
    {
        [EditLink]
        [Width(150)]
        public String SkillName { get; set; }
        [Width(150)]
        public Int32 ProficiencyScore { get; set; }
    }
}