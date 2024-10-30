namespace Indotalent.Attendance {
    export interface PunchOutRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        PunchDate?: string;
        PunchOut?: string;
        OutHour?: number;
        OutMinute?: number;
        PunchIn?: string;
        Duration?: number;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PunchOutRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeName';
        export const localTextPrefix = 'Attendance.PunchOut';
        export const lookupKey = 'Attendance.PunchOut';

        export function getLookup(): Q.Lookup<PunchOutRow> {
            return Q.getLookup<PunchOutRow>('Attendance.PunchOut');
        }
        export const deletePermission = 'Attendance:PunchOut';
        export const insertPermission = 'Attendance:PunchOut';
        export const readPermission = 'Attendance:PunchOut';
        export const updatePermission = 'Attendance:PunchOut';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            PunchDate = "PunchDate",
            PunchOut = "PunchOut",
            OutHour = "OutHour",
            OutMinute = "OutMinute",
            PunchIn = "PunchIn",
            Duration = "Duration",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
