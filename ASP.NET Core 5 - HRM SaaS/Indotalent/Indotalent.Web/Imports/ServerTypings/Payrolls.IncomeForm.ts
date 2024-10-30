namespace Indotalent.Payrolls {
    export interface IncomeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class IncomeForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.Income';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IncomeForm.init)  {
                IncomeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(IncomeForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
