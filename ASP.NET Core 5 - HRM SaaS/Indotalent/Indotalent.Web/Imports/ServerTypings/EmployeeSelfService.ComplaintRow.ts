namespace Indotalent.EmployeeSelfService {
    export interface ComplaintRow {
        Id?: number;
        Number?: string;
        IncidentDescription?: string;
        IncidentDate?: string;
        ResolveSuggestion?: string;
        Location?: string;
        Witness?: string;
        ReporterId?: number;
        ReporterName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ComplaintRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'EmployeeSelfService.Complaint';
        export const lookupKey = 'EmployeeSelfService.Complaint';

        export function getLookup(): Q.Lookup<ComplaintRow> {
            return Q.getLookup<ComplaintRow>('EmployeeSelfService.Complaint');
        }
        export const deletePermission = 'EmployeeSelfService:Complaint';
        export const insertPermission = 'EmployeeSelfService:Complaint';
        export const readPermission = 'EmployeeSelfService:Complaint';
        export const updatePermission = 'EmployeeSelfService:Complaint';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            IncidentDescription = "IncidentDescription",
            IncidentDate = "IncidentDate",
            ResolveSuggestion = "ResolveSuggestion",
            Location = "Location",
            Witness = "Witness",
            ReporterId = "ReporterId",
            ReporterName = "ReporterName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
