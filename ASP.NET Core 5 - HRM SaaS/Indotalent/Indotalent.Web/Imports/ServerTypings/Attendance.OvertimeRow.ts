namespace Indotalent.Attendance {
    export interface OvertimeRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        OvertimeDate?: string;
        Duration?: number;
        Description?: string;
        OvertimeStatus?: OvertimeStatus;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace OvertimeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeName';
        export const localTextPrefix = 'Attendance.Overtime';
        export const lookupKey = 'Attendance.Overtime';

        export function getLookup(): Q.Lookup<OvertimeRow> {
            return Q.getLookup<OvertimeRow>('Attendance.Overtime');
        }
        export const deletePermission = 'Attendance:Overtime';
        export const insertPermission = 'Attendance:Overtime';
        export const readPermission = 'Attendance:Overtime';
        export const updatePermission = 'Attendance:Overtime';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            OvertimeDate = "OvertimeDate",
            Duration = "Duration",
            Description = "Description",
            OvertimeStatus = "OvertimeStatus",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
