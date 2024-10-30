namespace Indotalent.Recruitment {
    export interface ApplicantEducationForm {
        SchoolName: Serenity.StringEditor;
        StudyMajor: Serenity.StringEditor;
        Grade: Serenity.StringEditor;
        ShortNote: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
    }

    export class ApplicantEducationForm extends Serenity.PrefixedContext {
        static formKey = 'Recruitment.ApplicantEducation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ApplicantEducationForm.init)  {
                ApplicantEducationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(ApplicantEducationForm, [
                    'SchoolName', w0,
                    'StudyMajor', w0,
                    'Grade', w0,
                    'ShortNote', w0,
                    'StartDate', w1,
                    'EndDate', w1
                ]);
            }
        }
    }
}
