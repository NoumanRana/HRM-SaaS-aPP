namespace Indotalent.Attendance {
    export interface TimesheetRow {
        Id?: number;
        EmployeeNumber?: string;
        EmployeeName?: string;
        CalendarDate?: string;
        PunchIn?: string;
        PunchOut?: string;
        WorkingDuration?: number;
        OvertimeDuration?: number;
    }

    export namespace TimesheetRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeName';
        export const localTextPrefix = 'Attendance.Timesheet';
        export const lookupKey = 'Attendance.Timesheet';

        export function getLookup(): Q.Lookup<TimesheetRow> {
            return Q.getLookup<TimesheetRow>('Attendance.Timesheet');
        }
        export const deletePermission = 'Attendance:Timesheet';
        export const insertPermission = 'Attendance:Timesheet';
        export const readPermission = 'Attendance:Timesheet';
        export const updatePermission = 'Attendance:Timesheet';

        export declare const enum Fields {
            Id = "Id",
            EmployeeNumber = "EmployeeNumber",
            EmployeeName = "EmployeeName",
            CalendarDate = "CalendarDate",
            PunchIn = "PunchIn",
            PunchOut = "PunchOut",
            WorkingDuration = "WorkingDuration",
            OvertimeDuration = "OvertimeDuration"
        }
    }
}
