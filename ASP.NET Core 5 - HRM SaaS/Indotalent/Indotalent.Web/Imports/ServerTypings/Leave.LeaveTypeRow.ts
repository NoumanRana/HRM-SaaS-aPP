namespace Indotalent.Leave {
    export interface LeaveTypeRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace LeaveTypeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Leave.LeaveType';
        export const lookupKey = 'Leave.LeaveType';

        export function getLookup(): Q.Lookup<LeaveTypeRow> {
            return Q.getLookup<LeaveTypeRow>('Leave.LeaveType');
        }
        export const deletePermission = 'Leave:LeaveType';
        export const insertPermission = 'Leave:LeaveType';
        export const readPermission = 'Leave:LeaveType';
        export const updatePermission = 'Leave:LeaveType';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
