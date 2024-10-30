namespace Indotalent.EmployeeSelfService {
    export interface LeaveDelegatedTaskForm {
        ShortNote: Serenity.StringEditor;
    }

    export class LeaveDelegatedTaskForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.LeaveDelegatedTask';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LeaveDelegatedTaskForm.init)  {
                LeaveDelegatedTaskForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LeaveDelegatedTaskForm, [
                    'ShortNote', w0
                ]);
            }
        }
    }
}
