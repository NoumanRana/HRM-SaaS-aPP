using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.EmployeeTopSkill")]
    [BasedOnRow(typeof(EmployeeTopSkillRow), CheckNames = true)]
    public class EmployeeTopSkillForm
    {
        [Tab("General")]
        [Category("Skill Info")]
        public String SkillName { get; set; }
        [Category("Score")]
        public Int32 ProficiencyScore { get; set; }
    }
}