namespace Indotalent.Payrolls {
    export interface DeductionForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        DeductionRate: Serenity.DecimalEditor;
    }

    export class DeductionForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.Deduction';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DeductionForm.init)  {
                DeductionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(DeductionForm, [
                    'Name', w0,
                    'Description', w1,
                    'DeductionRate', w2
                ]);
            }
        }
    }
}
