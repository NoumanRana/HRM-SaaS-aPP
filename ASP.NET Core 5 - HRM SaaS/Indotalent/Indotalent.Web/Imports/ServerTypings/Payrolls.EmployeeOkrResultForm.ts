namespace Indotalent.Payrolls {
    export interface EmployeeOkrResultForm {
        Result: Serenity.StringEditor;
    }

    export class EmployeeOkrResultForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeOkrResult';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeOkrResultForm.init)  {
                EmployeeOkrResultForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EmployeeOkrResultForm, [
                    'Result', w0
                ]);
            }
        }
    }
}
