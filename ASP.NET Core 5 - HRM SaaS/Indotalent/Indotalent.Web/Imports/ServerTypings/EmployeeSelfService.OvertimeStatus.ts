namespace Indotalent.EmployeeSelfService {
    export enum OvertimeStatus {
        Submit = 1,
        Approve = 2
    }
    Serenity.Decorators.registerEnumType(OvertimeStatus, 'Indotalent.EmployeeSelfService.OvertimeStatus', 'Attendance.OvertimeStatus');
}
