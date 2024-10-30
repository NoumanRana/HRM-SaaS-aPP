namespace Indotalent.Payrolls {
    export interface EmployeeOkrObjectiveForm {
        Objective: Serenity.StringEditor;
    }

    export class EmployeeOkrObjectiveForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeOkrObjective';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeOkrObjectiveForm.init)  {
                EmployeeOkrObjectiveForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EmployeeOkrObjectiveForm, [
                    'Objective', w0
                ]);
            }
        }
    }
}
