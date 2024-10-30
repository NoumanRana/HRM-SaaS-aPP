namespace Indotalent.Recruitment {
    export interface ApplicantForm {
        Number: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        PlaceOfBirth: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Picture: Serenity.ImageUploadEditor;
        VacancyId: Serenity.LookupEditor;
        JobTitle: Serenity.StringEditor;
        HiringManagerId: Serenity.LookupEditor;
        ExperienceList: ApplicantExperienceEditor;
        EducationList: ApplicantEducationEditor;
        SkillList: ApplicantTopSkillEditor;
    }

    export class ApplicantForm extends Serenity.PrefixedContext {
        static formKey = 'Recruitment.Applicant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ApplicantForm.init)  {
                ApplicantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.ImageUploadEditor;
                var w5 = ApplicantExperienceEditor;
                var w6 = ApplicantEducationEditor;
                var w7 = ApplicantTopSkillEditor;

                Q.initFormType(ApplicantForm, [
                    'Number', w0,
                    'Name', w0,
                    'DateOfBirth', w1,
                    'PlaceOfBirth', w0,
                    'GenderId', w2,
                    'Description', w3,
                    'Street', w0,
                    'City', w0,
                    'State', w0,
                    'ZipCode', w0,
                    'Phone', w0,
                    'Email', w0,
                    'Picture', w4,
                    'VacancyId', w2,
                    'JobTitle', w0,
                    'HiringManagerId', w2,
                    'ExperienceList', w5,
                    'EducationList', w6,
                    'SkillList', w7
                ]);
            }
        }
    }
}
