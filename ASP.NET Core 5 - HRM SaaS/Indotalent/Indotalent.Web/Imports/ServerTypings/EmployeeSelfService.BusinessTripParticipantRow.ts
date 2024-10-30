namespace Indotalent.EmployeeSelfService {
    export interface BusinessTripParticipantRow {
        Id?: number;
        BusinessTripId?: number;
        BusinessTripName?: string;
        EmployeeId?: number;
        EmployeeName?: string;
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

    export namespace BusinessTripParticipantRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BusinessTripName';
        export const localTextPrefix = 'EmployeeSelfService.BusinessTripParticipant';
        export const lookupKey = 'EmployeeSelfService.BusinessTripParticipant';

        export function getLookup(): Q.Lookup<BusinessTripParticipantRow> {
            return Q.getLookup<BusinessTripParticipantRow>('EmployeeSelfService.BusinessTripParticipant');
        }
        export const deletePermission = 'EmployeeSelfService:BusinessTrip';
        export const insertPermission = 'EmployeeSelfService:BusinessTrip';
        export const readPermission = 'EmployeeSelfService:BusinessTrip';
        export const updatePermission = 'EmployeeSelfService:BusinessTrip';

        export declare const enum Fields {
            Id = "Id",
            BusinessTripId = "BusinessTripId",
            BusinessTripName = "BusinessTripName",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
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
