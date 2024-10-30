namespace Indotalent.EmployeeSelfService {
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
        export const localTextPrefix = 'EmployeeSelfService.LeaveDelegatedTask';
        export const lookupKey = 'EmployeeSelfService.LeaveDelegatedTask';

        export function getLookup(): Q.Lookup<LeaveDelegatedTaskRow> {
            return Q.getLookup<LeaveDelegatedTaskRow>('EmployeeSelfService.LeaveDelegatedTask');
        }
        export const deletePermission = 'EmployeeSelfService:LeaveRequest';
        export const insertPermission = 'EmployeeSelfService:LeaveRequest';
        export const readPermission = 'EmployeeSelfService:LeaveRequest';
        export const updatePermission = 'EmployeeSelfService:LeaveRequest';

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
