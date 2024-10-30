namespace Indotalent.Operation {
    export interface TicketForm {
        Number: Serenity.StringEditor;
        TicketDate: Serenity.DateEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
        Request: Controls.CustomHtmlNoteContentEditor;
        ItemList: TicketDetailEditor;
    }

    export class TicketForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.Ticket';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TicketForm.init)  {
                TicketForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = Controls.CustomHtmlNoteContentEditor;
                var w4 = TicketDetailEditor;

                Q.initFormType(TicketForm, [
                    'Number', w0,
                    'TicketDate', w1,
                    'EmployeeId', w2,
                    'BranchId', w2,
                    'DepartmentId', w2,
                    'SupervisorId', w2,
                    'Request', w3,
                    'ItemList', w4
                ]);
            }
        }
    }
}
