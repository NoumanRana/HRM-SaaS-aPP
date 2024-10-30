namespace Indotalent.Performance {
    export interface EvaluationForm {
        Number: Serenity.StringEditor;
        Group: Serenity.StringEditor;
        Indicator: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class EvaluationForm extends Serenity.PrefixedContext {
        static formKey = 'Performance.Evaluation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EvaluationForm.init)  {
                EvaluationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(EvaluationForm, [
                    'Number', w0,
                    'Group', w0,
                    'Indicator', w1,
                    'Description', w1
                ]);
            }
        }
    }
}
