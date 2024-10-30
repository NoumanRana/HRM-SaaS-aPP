using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Forms
{
    [FormScript("Recruitment.Applicant")]
    [BasedOnRow(typeof(ApplicantRow), CheckNames = true)]
    public class ApplicantForm
    {
        [Tab("General")]
        [Category("Applicant Info")]
        public String Number { get; set; }
        public String Name { get; set; }
        [DefaultValue("now")]
        public DateTime DateOfBirth { get; set; }
        public String PlaceOfBirth { get; set; }
        public Int32 GenderId { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Address")]
        public String Street { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String ZipCode { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }

        [Category("Picture")]
        public String Picture { get; set; }

        [Category("Vacancy")]
        public Int32 VacancyId { get; set; }
        public String JobTitle { get; set; }
        public Int32 HiringManagerId { get; set; }

        [Tab("Experiences")]
        [Category("Info")]
        [ApplicantExperienceEditor]
        public List<ApplicantExperienceRow> ExperienceList { get; set; }

        [Tab("Educations")]
        [Category("Info")]
        [ApplicantEducationEditor]
        public List<ApplicantEducationRow> EducationList { get; set; }

        [Tab("Skills")]
        [Category("Info")]
        [ApplicantTopSkillEditor]
        public List<ApplicantTopSkillRow> SkillList { get; set; }
    }
}