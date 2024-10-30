namespace Indotalent.EmployeeSelfService {
    export interface TrainingEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
        BranchId?: number;
        DepartmentId?: number;
        SupervisorId?: number;
    }
}
