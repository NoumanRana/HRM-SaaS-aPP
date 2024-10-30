namespace Indotalent.Payrolls {
    export interface EmployeeChildrenForm {
        Name: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        Profession: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }

    export class EmployeeChildrenForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeChildren';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeChildrenForm.init)  {
                EmployeeChildrenForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(EmployeeChildrenForm, [
                    'Name', w0,
                    'DateOfBirth', w1,
                    'Profession', w0,
                    'Street', w0,
                    'City', w0,
                    'State', w0,
                    'ZipCode', w0,
                    'Phone', w0,
                    'Email', w0
                ]);
            }
        }
    }
}
