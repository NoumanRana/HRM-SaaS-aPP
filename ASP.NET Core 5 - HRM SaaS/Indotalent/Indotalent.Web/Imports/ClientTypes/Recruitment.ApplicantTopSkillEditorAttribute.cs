using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Recruitment
{
    public partial class ApplicantTopSkillEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Recruitment.ApplicantTopSkillEditor";

        public ApplicantTopSkillEditorAttribute()
            : base(Key)
        {
        }
    }
}
