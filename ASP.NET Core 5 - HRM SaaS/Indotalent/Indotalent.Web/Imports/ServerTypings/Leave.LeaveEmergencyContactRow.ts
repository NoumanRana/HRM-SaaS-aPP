namespace Indotalent.Leave {
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
        export const localTextPrefix = 'Leave.LeaveEmergencyContact';
        export const lookupKey = 'Leave.LeaveEmergencyContact';

        export function getLookup(): Q.Lookup<LeaveEmergencyContactRow> {
            return Q.getLookup<LeaveEmergencyContactRow>('Leave.LeaveEmergencyContact');
        }
        export const deletePermission = 'Leave:LeaveRequest';
        export const insertPermission = 'Leave:LeaveRequest';
        export const readPermission = 'Leave:LeaveRequest';
        export const updatePermission = 'Leave:LeaveRequest';

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
