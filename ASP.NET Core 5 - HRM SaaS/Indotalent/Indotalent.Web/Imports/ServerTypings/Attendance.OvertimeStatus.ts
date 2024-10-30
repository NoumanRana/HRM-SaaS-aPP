namespace Indotalent.Attendance {
    export enum OvertimeStatus {
        Submit = 1,
        Approve = 2
    }
    Serenity.Decorators.registerEnumType(OvertimeStatus, 'Indotalent.Attendance.OvertimeStatus', 'Attendance.OvertimeStatus');
}
