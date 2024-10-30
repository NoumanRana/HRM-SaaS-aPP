namespace Indotalent.Recruitment {
    export interface InterviewForm {
        Number: Serenity.StringEditor;
        Room: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ApplicantId: Serenity.LookupEditor;
        VacancyId: Serenity.LookupEditor;
        JobTitle: Serenity.StringEditor;
        HiringManagerId: Serenity.LookupEditor;
        ResultList: InterviewResultEditor;
    }

    export class InterviewForm extends Serenity.PrefixedContext {
        static formKey = 'Recruitment.Interview';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InterviewForm.init)  {
                InterviewForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.LookupEditor;
                var w4 = InterviewResultEditor;

                Q.initFormType(InterviewForm, [
                    'Number', w0,
                    'Room', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'Description', w2,
                    'Street', w0,
                    'City', w0,
                    'State', w0,
                    'ZipCode', w0,
                    'Phone', w0,
                    'Email', w0,
                    'ApplicantId', w3,
                    'VacancyId', w3,
                    'JobTitle', w0,
                    'HiringManagerId', w3,
                    'ResultList', w4
                ]);
            }
        }
    }
}
