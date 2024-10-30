namespace Indotalent.EmployeeSelfService {
    export enum LeaveRequestStatus {
        Submit = 1,
        Approve = 2
    }
    Serenity.Decorators.registerEnumType(LeaveRequestStatus, 'Indotalent.EmployeeSelfService.LeaveRequestStatus', 'EmployeeSelfService.LeaveRequestStatus');
}
