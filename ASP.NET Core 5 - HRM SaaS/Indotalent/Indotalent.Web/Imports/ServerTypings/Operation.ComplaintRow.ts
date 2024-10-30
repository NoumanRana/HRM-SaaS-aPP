namespace Indotalent.Operation {
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
        export const localTextPrefix = 'Operation.Complaint';
        export const lookupKey = 'Operation.Complaint';

        export function getLookup(): Q.Lookup<ComplaintRow> {
            return Q.getLookup<ComplaintRow>('Operation.Complaint');
        }
        export const deletePermission = 'Operation:Complaint';
        export const insertPermission = 'Operation:Complaint';
        export const readPermission = 'Operation:Complaint';
        export const updatePermission = 'Operation:Complaint';

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
