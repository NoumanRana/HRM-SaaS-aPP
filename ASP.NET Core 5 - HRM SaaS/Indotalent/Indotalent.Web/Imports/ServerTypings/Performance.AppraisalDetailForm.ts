namespace Indotalent.Performance {
    export interface AppraisalDetailForm {
        EvaluationId: Serenity.LookupEditor;
        EvaluationNumber: Serenity.StringEditor;
        EvaluationGroup: Serenity.StringEditor;
        EvaluationIndicator: Serenity.TextAreaEditor;
        EvaluationResult: Serenity.EnumEditor;
    }

    export class AppraisalDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Performance.AppraisalDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AppraisalDetailForm.init)  {
                AppraisalDetailForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.EnumEditor;

                Q.initFormType(AppraisalDetailForm, [
                    'EvaluationId', w0,
                    'EvaluationNumber', w1,
                    'EvaluationGroup', w1,
                    'EvaluationIndicator', w2,
                    'EvaluationResult', w3
                ]);
            }
        }
    }
}
