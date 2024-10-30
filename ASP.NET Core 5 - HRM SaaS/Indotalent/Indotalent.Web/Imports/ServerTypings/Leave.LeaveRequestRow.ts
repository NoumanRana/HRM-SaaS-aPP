namespace Indotalent.Leave {
    export interface LeaveRequestRow {
        Id?: number;
        Number?: string;
        Description?: string;
        FromDate?: string;
        ToDate?: string;
        Duration?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        DelegatedEmployeeId?: number;
        DelegatedEmployeeName?: string;
        LeaveTypeId?: number;
        LeaveTypeName?: string;
        LeaveRequestStatus?: LeaveRequestStatus;
        TenantId?: number;
        TenantName?: string;
        LeaveDelegatedTaskList?: LeaveDelegatedTaskRow[];
        LeaveEmergencyContactList?: LeaveEmergencyContactRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace LeaveRequestRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Leave.LeaveRequest';
        export const lookupKey = 'Leave.LeaveRequest';

        export function getLookup(): Q.Lookup<LeaveRequestRow> {
            return Q.getLookup<LeaveRequestRow>('Leave.LeaveRequest');
        }
        export const deletePermission = 'Leave:LeaveRequest';
        export const insertPermission = 'Leave:LeaveRequest';
        export const readPermission = 'Leave:LeaveRequest';
        export const updatePermission = 'Leave:LeaveRequest';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            FromDate = "FromDate",
            ToDate = "ToDate",
            Duration = "Duration",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            DelegatedEmployeeId = "DelegatedEmployeeId",
            DelegatedEmployeeName = "DelegatedEmployeeName",
            LeaveTypeId = "LeaveTypeId",
            LeaveTypeName = "LeaveTypeName",
            LeaveRequestStatus = "LeaveRequestStatus",
            TenantId = "TenantId",
            TenantName = "TenantName",
            LeaveDelegatedTaskList = "LeaveDelegatedTaskList",
            LeaveEmergencyContactList = "LeaveEmergencyContactList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
