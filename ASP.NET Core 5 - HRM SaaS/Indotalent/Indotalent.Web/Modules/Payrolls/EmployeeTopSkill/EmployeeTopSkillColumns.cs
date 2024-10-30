using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Columns
{
    [ColumnsScript("Payrolls.EmployeeTopSkill")]
    [BasedOnRow(typeof(EmployeeTopSkillRow), CheckNames = true)]
    public class EmployeeTopSkillColumns
    {
        [EditLink]
        [Width(150)]
        public String SkillName { get; set; }
        [Width(150)]
        public Int32 ProficiencyScore { get; set; }
    }
}