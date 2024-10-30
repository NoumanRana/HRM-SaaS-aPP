namespace Indotalent.EmployeeSelfService {
    export interface LeaveEmergencyContactRow {
        Id?: number;
        LeaveRequestId?: number;
        LeaveRequestNumber?: string;
        ContactName?: string;
        ContactPhoneNumber?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace LeaveEmergencyContactRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ContactName';
        export const localTextPrefix = 'EmployeeSelfService.LeaveEmergencyContact';
        export const lookupKey = 'EmployeeSelfService.LeaveEmergencyContact';

        export function getLookup(): Q.Lookup<LeaveEmergencyContactRow> {
            return Q.getLookup<LeaveEmergencyContactRow>('EmployeeSelfService.LeaveEmergencyContact');
        }
        export const deletePermission = 'EmployeeSelfService:LeaveRequest';
        export const insertPermission = 'EmployeeSelfService:LeaveRequest';
        export const readPermission = 'EmployeeSelfService:LeaveRequest';
        export const updatePermission = 'EmployeeSelfService:LeaveRequest';

        export declare const enum Fields {
            Id = "Id",
            LeaveRequestId = "LeaveRequestId",
            LeaveRequestNumber = "LeaveRequestNumber",
            ContactName = "ContactName",
            ContactPhoneNumber = "ContactPhoneNumber",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
