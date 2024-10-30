namespace Indotalent.EmployeeSelfService {
    export interface TicketDetailForm {
        Response: Controls.CustomHtmlNoteContentEditor;
        ResponseBy: Serenity.StringEditor;
        ResponseAt: Serenity.DateTimeEditor;
    }

    export class TicketDetailForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.TicketDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TicketDetailForm.init)  {
                TicketDetailForm.init = true;

                var s = Serenity;
                var w0 = Controls.CustomHtmlNoteContentEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateTimeEditor;

                Q.initFormType(TicketDetailForm, [
                    'Response', w0,
                    'ResponseBy', w1,
                    'ResponseAt', w2
                ]);
            }
        }
    }
}
