namespace Indotalent.Operation {
    export interface WarningForm {
        Number: Serenity.StringEditor;
        WarningDate: Serenity.DateEditor;
        CorrectiveDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        WarningReason: Controls.CustomHtmlNoteContentEditor;
        CorrectiveAction: Controls.CustomHtmlNoteContentEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
    }

    export class WarningForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.Warning';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WarningForm.init)  {
                WarningForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;
                var w3 = Controls.CustomHtmlNoteContentEditor;
                var w4 = s.LookupEditor;

                Q.initFormType(WarningForm, [
                    'Number', w0,
                    'WarningDate', w1,
                    'CorrectiveDate', w1,
                    'Description', w2,
                    'WarningReason', w3,
                    'CorrectiveAction', w3,
                    'EmployeeId', w4,
                    'BranchId', w4,
                    'DepartmentId', w4,
                    'SupervisorId', w4
                ]);
            }
        }
    }
}
