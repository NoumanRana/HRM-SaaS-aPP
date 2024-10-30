namespace Indotalent.Payrolls {
    export interface EmployeeJobDescriptionForm {
        JobDescription: Serenity.StringEditor;
    }

    export class EmployeeJobDescriptionForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeJobDescription';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeJobDescriptionForm.init)  {
                EmployeeJobDescriptionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EmployeeJobDescriptionForm, [
                    'JobDescription', w0
                ]);
            }
        }
    }
}
