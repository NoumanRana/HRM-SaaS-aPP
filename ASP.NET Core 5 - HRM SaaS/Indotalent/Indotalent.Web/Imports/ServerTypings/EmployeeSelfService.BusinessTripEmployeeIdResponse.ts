namespace Indotalent.EmployeeSelfService {
    export interface BusinessTripEmployeeIdResponse extends Serenity.ServiceResponse {
        EmployeeId?: number;
        BranchId?: number;
        DepartmentId?: number;
        SupervisorId?: number;
    }
}
