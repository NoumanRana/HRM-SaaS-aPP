namespace Indotalent.EmployeeSelfService {
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
        export const localTextPrefix = 'EmployeeSelfService.MeetingParticipant';
        export const lookupKey = 'EmployeeSelfService.MeetingParticipant';

        export function getLookup(): Q.Lookup<MeetingParticipantRow> {
            return Q.getLookup<MeetingParticipantRow>('EmployeeSelfService.MeetingParticipant');
        }
        export const deletePermission = 'EmployeeSelfService:Meeting';
        export const insertPermission = 'EmployeeSelfService:Meeting';
        export const readPermission = 'EmployeeSelfService:Meeting';
        export const updatePermission = 'EmployeeSelfService:Meeting';

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
