namespace Indotalent.Operation {
    export interface MeetingParticipantRow {
        Id?: number;
        MeetingId?: number;
        MeetingName?: string;
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

    export namespace MeetingParticipantRow {
        export const idProperty = 'Id';
        export const nameProperty = 'MeetingName';
        export const localTextPrefix = 'Operation.MeetingParticipant';
        export const lookupKey = 'Operation.MeetingParticipant';

        export function getLookup(): Q.Lookup<MeetingParticipantRow> {
            return Q.getLookup<MeetingParticipantRow>('Operation.MeetingParticipant');
        }
        export const deletePermission = 'Operation:Meeting';
        export const insertPermission = 'Operation:Meeting';
        export const readPermission = 'Operation:Meeting';
        export const updatePermission = 'Operation:Meeting';

        export declare const enum Fields {
            Id = "Id",
            MeetingId = "MeetingId",
            MeetingName = "MeetingName",
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
