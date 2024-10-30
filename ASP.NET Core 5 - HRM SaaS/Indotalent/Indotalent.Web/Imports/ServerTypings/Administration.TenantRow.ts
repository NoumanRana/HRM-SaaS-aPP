namespace Indotalent.Administration {
    export interface TenantRow {
        TenantId?: number;
        TenantName?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        Currency?: string;
        MaximumUser?: number;
        EmployeeNumberPrefix?: string;
        EmployeeNumberUseDate?: boolean;
        EmployeeNumberLength?: number;
        LeaveRequestNumberPrefix?: string;
        LeaveRequestNumberUseDate?: boolean;
        LeaveRequestNumberLength?: number;
        EvaluationNumberPrefix?: string;
        EvaluationNumberUseDate?: boolean;
        EvaluationNumberLength?: number;
        AppraisalNumberPrefix?: string;
        AppraisalNumberUseDate?: boolean;
        AppraisalNumberLength?: number;
        PromotionNumberPrefix?: string;
        PromotionNumberUseDate?: boolean;
        PromotionNumberLength?: number;
        TransferNumberPrefix?: string;
        TransferNumberUseDate?: boolean;
        TransferNumberLength?: number;
        VacancyNumberPrefix?: string;
        VacancyNumberUseDate?: boolean;
        VacancyNumberLength?: number;
        ApplicantNumberPrefix?: string;
        ApplicantNumberUseDate?: boolean;
        ApplicantNumberLength?: number;
        InterviewNumberPrefix?: string;
        InterviewNumberUseDate?: boolean;
        InterviewNumberLength?: number;
        ReimbursementNumberPrefix?: string;
        ReimbursementNumberUseDate?: boolean;
        ReimbursementNumberLength?: number;
        TicketNumberPrefix?: string;
        TicketNumberUseDate?: boolean;
        TicketNumberLength?: number;
        AssetNumberPrefix?: string;
        AssetNumberUseDate?: boolean;
        AssetNumberLength?: number;
        AssetHandOverNumberPrefix?: string;
        AssetHandOverNumberUseDate?: boolean;
        AssetHandOverNumberLength?: number;
        ComplaintNumberPrefix?: string;
        ComplaintNumberUseDate?: boolean;
        ComplaintNumberLength?: number;
        ResignationNumberPrefix?: string;
        ResignationNumberUseDate?: boolean;
        ResignationNumberLength?: number;
        WarningNumberPrefix?: string;
        WarningNumberUseDate?: boolean;
        WarningNumberLength?: number;
        TerminationNumberPrefix?: string;
        TerminationNumberUseDate?: boolean;
        TerminationNumberLength?: number;
        SOPNumberPrefix?: string;
        SOPNumberUseDate?: boolean;
        SOPNumberLength?: number;
        PayrollNumberPrefix?: string;
        PayrollNumberUseDate?: boolean;
        PayrollNumberLength?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace TenantRow {
        export const idProperty = 'TenantId';
        export const nameProperty = 'TenantName';
        export const localTextPrefix = 'Administration.Tenant';
        export const lookupKey = 'Administration.Tenant';

        export function getLookup(): Q.Lookup<TenantRow> {
            return Q.getLookup<TenantRow>('Administration.Tenant');
        }
        export const deletePermission = 'Administration:Tenant';
        export const insertPermission = 'Administration:Tenant';
        export const readPermission = 'Administration:Tenant';
        export const updatePermission = 'Administration:Tenant';

        export declare const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            Currency = "Currency",
            MaximumUser = "MaximumUser",
            EmployeeNumberPrefix = "EmployeeNumberPrefix",
            EmployeeNumberUseDate = "EmployeeNumberUseDate",
            EmployeeNumberLength = "EmployeeNumberLength",
            LeaveRequestNumberPrefix = "LeaveRequestNumberPrefix",
            LeaveRequestNumberUseDate = "LeaveRequestNumberUseDate",
            LeaveRequestNumberLength = "LeaveRequestNumberLength",
            EvaluationNumberPrefix = "EvaluationNumberPrefix",
            EvaluationNumberUseDate = "EvaluationNumberUseDate",
            EvaluationNumberLength = "EvaluationNumberLength",
            AppraisalNumberPrefix = "AppraisalNumberPrefix",
            AppraisalNumberUseDate = "AppraisalNumberUseDate",
            AppraisalNumberLength = "AppraisalNumberLength",
            PromotionNumberPrefix = "PromotionNumberPrefix",
            PromotionNumberUseDate = "PromotionNumberUseDate",
            PromotionNumberLength = "PromotionNumberLength",
            TransferNumberPrefix = "TransferNumberPrefix",
            TransferNumberUseDate = "TransferNumberUseDate",
            TransferNumberLength = "TransferNumberLength",
            VacancyNumberPrefix = "VacancyNumberPrefix",
            VacancyNumberUseDate = "VacancyNumberUseDate",
            VacancyNumberLength = "VacancyNumberLength",
            ApplicantNumberPrefix = "ApplicantNumberPrefix",
            ApplicantNumberUseDate = "ApplicantNumberUseDate",
            ApplicantNumberLength = "ApplicantNumberLength",
            InterviewNumberPrefix = "InterviewNumberPrefix",
            InterviewNumberUseDate = "InterviewNumberUseDate",
            InterviewNumberLength = "InterviewNumberLength",
            ReimbursementNumberPrefix = "ReimbursementNumberPrefix",
            ReimbursementNumberUseDate = "ReimbursementNumberUseDate",
            ReimbursementNumberLength = "ReimbursementNumberLength",
            TicketNumberPrefix = "TicketNumberPrefix",
            TicketNumberUseDate = "TicketNumberUseDate",
            TicketNumberLength = "TicketNumberLength",
            AssetNumberPrefix = "AssetNumberPrefix",
            AssetNumberUseDate = "AssetNumberUseDate",
            AssetNumberLength = "AssetNumberLength",
            AssetHandOverNumberPrefix = "AssetHandOverNumberPrefix",
            AssetHandOverNumberUseDate = "AssetHandOverNumberUseDate",
            AssetHandOverNumberLength = "AssetHandOverNumberLength",
            ComplaintNumberPrefix = "ComplaintNumberPrefix",
            ComplaintNumberUseDate = "ComplaintNumberUseDate",
            ComplaintNumberLength = "ComplaintNumberLength",
            ResignationNumberPrefix = "ResignationNumberPrefix",
            ResignationNumberUseDate = "ResignationNumberUseDate",
            ResignationNumberLength = "ResignationNumberLength",
            WarningNumberPrefix = "WarningNumberPrefix",
            WarningNumberUseDate = "WarningNumberUseDate",
            WarningNumberLength = "WarningNumberLength",
            TerminationNumberPrefix = "TerminationNumberPrefix",
            TerminationNumberUseDate = "TerminationNumberUseDate",
            TerminationNumberLength = "TerminationNumberLength",
            SOPNumberPrefix = "SOPNumberPrefix",
            SOPNumberUseDate = "SOPNumberUseDate",
            SOPNumberLength = "SOPNumberLength",
            PayrollNumberPrefix = "PayrollNumberPrefix",
            PayrollNumberUseDate = "PayrollNumberUseDate",
            PayrollNumberLength = "PayrollNumberLength",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
