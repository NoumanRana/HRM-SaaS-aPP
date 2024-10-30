namespace Indotalent.EmployeeSelfService {
    export interface MeetingEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
        BranchId?: number;
        DepartmentId?: number;
        SupervisorId?: number;
    }
}
