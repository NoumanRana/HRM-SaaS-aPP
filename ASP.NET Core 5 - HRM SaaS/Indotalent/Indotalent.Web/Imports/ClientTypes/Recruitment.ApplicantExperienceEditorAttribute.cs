using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Recruitment
{
    public partial class ApplicantExperienceEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Recruitment.ApplicantExperienceEditor";

        public ApplicantExperienceEditorAttribute()
            : base(Key)
        {
        }
    }
}
