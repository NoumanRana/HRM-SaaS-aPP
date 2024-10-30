namespace Indotalent.Performance {
    export interface AppraisalForm {
        Number: Serenity.StringEditor;
        EmployeeId: Serenity.LookupEditor;
        EvaluatorId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        CurrentAppraisalDate: Serenity.DateEditor;
        LastAppraisalDate: Serenity.DateEditor;
        AppraisalDetailList: AppraisalDetailEditor;
        Comment: Serenity.TextAreaEditor;
        Recomendation: Serenity.TextAreaEditor;
    }

    export class AppraisalForm extends Serenity.PrefixedContext {
        static formKey = 'Performance.Appraisal';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AppraisalForm.init)  {
                AppraisalForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.DateEditor;
                var w4 = AppraisalDetailEditor;

                Q.initFormType(AppraisalForm, [
                    'Number', w0,
                    'EmployeeId', w1,
                    'EvaluatorId', w1,
                    'Description', w2,
                    'CurrentAppraisalDate', w3,
                    'LastAppraisalDate', w3,
                    'AppraisalDetailList', w4,
                    'Comment', w2,
                    'Recomendation', w2
                ]);
            }
        }
    }
}
