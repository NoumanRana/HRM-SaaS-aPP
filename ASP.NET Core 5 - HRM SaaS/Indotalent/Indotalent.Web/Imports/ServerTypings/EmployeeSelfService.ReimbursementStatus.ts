namespace Indotalent.EmployeeSelfService {
    export enum ReimbursementStatus {
        Submit = 1,
        Approve = 2
    }
    Serenity.Decorators.registerEnumType(ReimbursementStatus, 'Indotalent.EmployeeSelfService.ReimbursementStatus', 'EmployeeSelfService.ReimbursementStatus');
}
