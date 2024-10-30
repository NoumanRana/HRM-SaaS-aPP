namespace Indotalent.Operation {
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
        export const localTextPrefix = 'Operation.BusinessTripParticipant';
        export const lookupKey = 'Operation.BusinessTripParticipant';

        export function getLookup(): Q.Lookup<BusinessTripParticipantRow> {
            return Q.getLookup<BusinessTripParticipantRow>('Operation.BusinessTripParticipant');
        }
        export const deletePermission = 'Operation:BusinessTrip';
        export const insertPermission = 'Operation:BusinessTrip';
        export const readPermission = 'Operation:BusinessTrip';
        export const updatePermission = 'Operation:BusinessTrip';

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
