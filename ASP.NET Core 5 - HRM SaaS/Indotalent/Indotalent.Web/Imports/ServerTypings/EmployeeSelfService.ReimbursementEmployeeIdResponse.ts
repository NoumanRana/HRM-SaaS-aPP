namespace Indotalent.EmployeeSelfService {
    export interface ReimbursementEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
        BranchId?: number;
        DepartmentId?: number;
        SupervisorId?: number;
    }
}
