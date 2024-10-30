namespace Indotalent.EmployeeSelfService {
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
        export const localTextPrefix = 'EmployeeSelfService.Timesheet';
        export const lookupKey = 'EmployeeSelfService.Timesheet';

        export function getLookup(): Q.Lookup<TimesheetRow> {
            return Q.getLookup<TimesheetRow>('EmployeeSelfService.Timesheet');
        }
        export const deletePermission = 'EmployeeSelfService:Timesheet';
        export const insertPermission = 'EmployeeSelfService:Timesheet';
        export const readPermission = 'EmployeeSelfService:Timesheet';
        export const updatePermission = 'EmployeeSelfService:Timesheet';

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
