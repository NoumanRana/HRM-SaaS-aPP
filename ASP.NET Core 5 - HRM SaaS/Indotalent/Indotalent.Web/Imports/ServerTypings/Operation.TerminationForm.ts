namespace Indotalent.Operation {
    export interface TerminationForm {
        Number: Serenity.StringEditor;
        TerminationDate: Serenity.DateEditor;
        EffectiveDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        TerminationReason: Controls.CustomHtmlNoteContentEditor;
        ReturnedItem: Controls.CustomHtmlNoteContentEditor;
        CompletedForm: Controls.CustomHtmlNoteContentEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
    }

    export class TerminationForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.Termination';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TerminationForm.init)  {
                TerminationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;
                var w3 = Controls.CustomHtmlNoteContentEditor;
                var w4 = s.LookupEditor;

                Q.initFormType(TerminationForm, [
                    'Number', w0,
                    'TerminationDate', w1,
                    'EffectiveDate', w1,
                    'Description', w2,
                    'TerminationReason', w3,
                    'ReturnedItem', w3,
                    'CompletedForm', w3,
                    'EmployeeId', w4,
                    'BranchId', w4,
                    'DepartmentId', w4,
                    'SupervisorId', w4
                ]);
            }
        }
    }
}
