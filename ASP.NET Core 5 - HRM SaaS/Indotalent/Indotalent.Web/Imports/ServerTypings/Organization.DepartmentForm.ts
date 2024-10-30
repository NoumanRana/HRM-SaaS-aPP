namespace Indotalent.Organization {
    export interface DepartmentForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class DepartmentForm extends Serenity.PrefixedContext {
        static formKey = 'Organization.Department';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DepartmentForm.init)  {
                DepartmentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(DepartmentForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
