namespace Indotalent.EmployeeSelfService {
    export interface ComplaintForm {
        Number: Serenity.StringEditor;
        IncidentDate: Serenity.DateEditor;
        Location: Serenity.TextAreaEditor;
        Witness: Controls.CustomHtmlNoteContentEditor;
        IncidentDescription: Controls.CustomHtmlNoteContentEditor;
        ResolveSuggestion: Controls.CustomHtmlNoteContentEditor;
        ReporterId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }

    export class ComplaintForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.Complaint';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ComplaintForm.init)  {
                ComplaintForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;
                var w3 = Controls.CustomHtmlNoteContentEditor;
                var w4 = s.LookupEditor;

                Q.initFormType(ComplaintForm, [
                    'Number', w0,
                    'IncidentDate', w1,
                    'Location', w2,
                    'Witness', w3,
                    'IncidentDescription', w3,
                    'ResolveSuggestion', w3,
                    'ReporterId', w4,
                    'BranchId', w4,
                    'DepartmentId', w4
                ]);
            }
        }
    }
}
