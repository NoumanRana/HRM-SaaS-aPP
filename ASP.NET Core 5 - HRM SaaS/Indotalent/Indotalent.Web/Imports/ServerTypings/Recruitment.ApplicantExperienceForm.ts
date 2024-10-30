namespace Indotalent.Recruitment {
    export interface ApplicantExperienceForm {
        CompanyName: Serenity.StringEditor;
        Position: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        Salary: Serenity.DecimalEditor;
    }

    export class ApplicantExperienceForm extends Serenity.PrefixedContext {
        static formKey = 'Recruitment.ApplicantExperience';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ApplicantExperienceForm.init)  {
                ApplicantExperienceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ApplicantExperienceForm, [
                    'CompanyName', w0,
                    'Position', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'Salary', w2
                ]);
            }
        }
    }
}
