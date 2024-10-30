using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Recruitment
{
    public partial class VacancyRequirementEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Recruitment.VacancyRequirementEditor";

        public VacancyRequirementEditorAttribute()
            : base(Key)
        {
        }
    }
}
