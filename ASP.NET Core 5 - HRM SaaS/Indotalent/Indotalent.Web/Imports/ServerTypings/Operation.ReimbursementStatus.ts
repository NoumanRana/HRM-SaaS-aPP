namespace Indotalent.Operation {
    export enum ReimbursementStatus {
        Submit = 1,
        Approve = 2
    }
    Serenity.Decorators.registerEnumType(ReimbursementStatus, 'Indotalent.Operation.ReimbursementStatus', 'Reimbursement.ReimbursementStatus');
}
