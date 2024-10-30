using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Recruitment
{
    public partial class VacancyBenefitEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Recruitment.VacancyBenefitEditor";

        public VacancyBenefitEditorAttribute()
            : base(Key)
        {
        }
    }
}
