namespace Indotalent.Recruitment {
    export interface InterviewResultForm {
        ResultName: Serenity.StringEditor;
        ResultScore: Serenity.IntegerEditor;
    }

    export class InterviewResultForm extends Serenity.PrefixedContext {
        static formKey = 'Recruitment.InterviewResult';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InterviewResultForm.init)  {
                InterviewResultForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(InterviewResultForm, [
                    'ResultName', w0,
                    'ResultScore', w1
                ]);
            }
        }
    }
}
