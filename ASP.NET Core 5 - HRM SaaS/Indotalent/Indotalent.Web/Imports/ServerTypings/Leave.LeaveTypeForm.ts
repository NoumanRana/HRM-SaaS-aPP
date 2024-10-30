namespace Indotalent.Leave {
    export interface LeaveTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class LeaveTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Leave.LeaveType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LeaveTypeForm.init)  {
                LeaveTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(LeaveTypeForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
