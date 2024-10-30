namespace Indotalent.Administration {
    export interface TenantForm {
        TenantName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Currency: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        EmployeeNumberPrefix: Serenity.StringEditor;
        EmployeeNumberUseDate: Serenity.BooleanEditor;
        EmployeeNumberLength: Serenity.IntegerEditor;
        LeaveRequestNumberPrefix: Serenity.StringEditor;
        LeaveRequestNumberUseDate: Serenity.BooleanEditor;
        LeaveRequestNumberLength: Serenity.IntegerEditor;
        EvaluationNumberPrefix: Serenity.StringEditor;
        EvaluationNumberUseDate: Serenity.BooleanEditor;
        EvaluationNumberLength: Serenity.IntegerEditor;
        AppraisalNumberPrefix: Serenity.StringEditor;
        AppraisalNumberUseDate: Serenity.BooleanEditor;
        AppraisalNumberLength: Serenity.IntegerEditor;
        PromotionNumberPrefix: Serenity.StringEditor;
        PromotionNumberUseDate: Serenity.BooleanEditor;
        PromotionNumberLength: Serenity.IntegerEditor;
        TransferNumberPrefix: Serenity.StringEditor;
        TransferNumberUseDate: Serenity.BooleanEditor;
        TransferNumberLength: Serenity.IntegerEditor;
        VacancyNumberPrefix: Serenity.StringEditor;
        VacancyNumberUseDate: Serenity.BooleanEditor;
        VacancyNumberLength: Serenity.IntegerEditor;
        ApplicantNumberPrefix: Serenity.StringEditor;
        ApplicantNumberUseDate: Serenity.BooleanEditor;
        ApplicantNumberLength: Serenity.IntegerEditor;
        InterviewNumberPrefix: Serenity.StringEditor;
        InterviewNumberUseDate: Serenity.BooleanEditor;
        InterviewNumberLength: Serenity.IntegerEditor;
        ReimbursementNumberPrefix: Serenity.StringEditor;
        ReimbursementNumberUseDate: Serenity.BooleanEditor;
        ReimbursementNumberLength: Serenity.IntegerEditor;
        TicketNumberPrefix: Serenity.StringEditor;
        TicketNumberUseDate: Serenity.BooleanEditor;
        TicketNumberLength: Serenity.IntegerEditor;
        AssetNumberPrefix: Serenity.StringEditor;
        AssetNumberUseDate: Serenity.BooleanEditor;
        AssetNumberLength: Serenity.IntegerEditor;
        AssetHandOverNumberPrefix: Serenity.StringEditor;
        AssetHandOverNumberUseDate: Serenity.BooleanEditor;
        AssetHandOverNumberLength: Serenity.IntegerEditor;
        ComplaintNumberPrefix: Serenity.StringEditor;
        ComplaintNumberUseDate: Serenity.BooleanEditor;
        ComplaintNumberLength: Serenity.IntegerEditor;
        ResignationNumberPrefix: Serenity.StringEditor;
        ResignationNumberUseDate: Serenity.BooleanEditor;
        ResignationNumberLength: Serenity.IntegerEditor;
        WarningNumberPrefix: Serenity.StringEditor;
        WarningNumberUseDate: Serenity.BooleanEditor;
        WarningNumberLength: Serenity.IntegerEditor;
        TerminationNumberPrefix: Serenity.StringEditor;
        TerminationNumberUseDate: Serenity.BooleanEditor;
        TerminationNumberLength: Serenity.IntegerEditor;
        SOPNumberPrefix: Serenity.StringEditor;
        SOPNumberUseDate: Serenity.BooleanEditor;
        SOPNumberLength: Serenity.IntegerEditor;
        PayrollNumberPrefix: Serenity.StringEditor;
        PayrollNumberUseDate: Serenity.BooleanEditor;
        PayrollNumberLength: Serenity.IntegerEditor;
        MaximumUser: Serenity.IntegerEditor;
    }

    export class TenantForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Tenant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TenantForm.init)  {
                TenantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(TenantForm, [
                    'TenantName', w0,
                    'Description', w1,
                    'Currency', w0,
                    'Street', w0,
                    'City', w0,
                    'State', w0,
                    'ZipCode', w0,
                    'Phone', w0,
                    'Email', w0,
                    'EmployeeNumberPrefix', w0,
                    'EmployeeNumberUseDate', w2,
                    'EmployeeNumberLength', w3,
                    'LeaveRequestNumberPrefix', w0,
                    'LeaveRequestNumberUseDate', w2,
                    'LeaveRequestNumberLength', w3,
                    'EvaluationNumberPrefix', w0,
                    'EvaluationNumberUseDate', w2,
                    'EvaluationNumberLength', w3,
                    'AppraisalNumberPrefix', w0,
                    'AppraisalNumberUseDate', w2,
                    'AppraisalNumberLength', w3,
                    'PromotionNumberPrefix', w0,
                    'PromotionNumberUseDate', w2,
                    'PromotionNumberLength', w3,
                    'TransferNumberPrefix', w0,
                    'TransferNumberUseDate', w2,
                    'TransferNumberLength', w3,
                    'VacancyNumberPrefix', w0,
                    'VacancyNumberUseDate', w2,
                    'VacancyNumberLength', w3,
                    'ApplicantNumberPrefix', w0,
                    'ApplicantNumberUseDate', w2,
                    'ApplicantNumberLength', w3,
                    'InterviewNumberPrefix', w0,
                    'InterviewNumberUseDate', w2,
                    'InterviewNumberLength', w3,
                    'ReimbursementNumberPrefix', w0,
                    'ReimbursementNumberUseDate', w2,
                    'ReimbursementNumberLength', w3,
                    'TicketNumberPrefix', w0,
                    'TicketNumberUseDate', w2,
                    'TicketNumberLength', w3,
                    'AssetNumberPrefix', w0,
                    'AssetNumberUseDate', w2,
                    'AssetNumberLength', w3,
                    'AssetHandOverNumberPrefix', w0,
                    'AssetHandOverNumberUseDate', w2,
                    'AssetHandOverNumberLength', w3,
                    'ComplaintNumberPrefix', w0,
                    'ComplaintNumberUseDate', w2,
                    'ComplaintNumberLength', w3,
                    'ResignationNumberPrefix', w0,
                    'ResignationNumberUseDate', w2,
                    'ResignationNumberLength', w3,
                    'WarningNumberPrefix', w0,
                    'WarningNumberUseDate', w2,
                    'WarningNumberLength', w3,
                    'TerminationNumberPrefix', w0,
                    'TerminationNumberUseDate', w2,
                    'TerminationNumberLength', w3,
                    'SOPNumberPrefix', w0,
                    'SOPNumberUseDate', w2,
                    'SOPNumberLength', w3,
                    'PayrollNumberPrefix', w0,
                    'PayrollNumberUseDate', w2,
                    'PayrollNumberLength', w3,
                    'MaximumUser', w3
                ]);
            }
        }
    }
}
