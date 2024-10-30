namespace Indotalent.Leave {
    export interface LeaveEmergencyContactForm {
        ContactName: Serenity.StringEditor;
        ContactPhoneNumber: Serenity.StringEditor;
    }

    export class LeaveEmergencyContactForm extends Serenity.PrefixedContext {
        static formKey = 'Leave.LeaveEmergencyContact';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LeaveEmergencyContactForm.init)  {
                LeaveEmergencyContactForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LeaveEmergencyContactForm, [
                    'ContactName', w0,
                    'ContactPhoneNumber', w0
                ]);
            }
        }
    }
}
