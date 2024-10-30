namespace Indotalent.Payrolls {
    export interface GradeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        CurrencyName: Serenity.StringEditor;
        BasicSalary: Serenity.DecimalEditor;
    }

    export class GradeForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.Grade';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GradeForm.init)  {
                GradeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(GradeForm, [
                    'Name', w0,
                    'Description', w1,
                    'CurrencyName', w0,
                    'BasicSalary', w2
                ]);
            }
        }
    }
}
