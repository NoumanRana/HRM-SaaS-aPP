namespace Indotalent.Leave {
    export interface LeaveDelegatedTaskRow {
        Id?: number;
        LeaveRequestId?: number;
        LeaveRequestNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace LeaveDelegatedTaskRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ShortNote';
        export const localTextPrefix = 'Leave.LeaveDelegatedTask';
        export const lookupKey = 'Leave.LeaveDelegatedTask';

        export function getLookup(): Q.Lookup<LeaveDelegatedTaskRow> {
            return Q.getLookup<LeaveDelegatedTaskRow>('Leave.LeaveDelegatedTask');
        }
        export const deletePermission = 'Leave:LeaveRequest';
        export const insertPermission = 'Leave:LeaveRequest';
        export const readPermission = 'Leave:LeaveRequest';
        export const updatePermission = 'Leave:LeaveRequest';

        export declare const enum Fields {
            Id = "Id",
            LeaveRequestId = "LeaveRequestId",
            LeaveRequestNumber = "LeaveRequestNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
