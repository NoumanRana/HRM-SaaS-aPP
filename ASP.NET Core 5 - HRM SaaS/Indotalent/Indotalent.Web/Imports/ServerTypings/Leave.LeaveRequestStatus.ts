namespace Indotalent.Leave {
    export enum LeaveRequestStatus {
        Submit = 1,
        Approve = 2
    }
    Serenity.Decorators.registerEnumType(LeaveRequestStatus, 'Indotalent.Leave.LeaveRequestStatus', 'Leave.LeaveRequestStatus');
}
