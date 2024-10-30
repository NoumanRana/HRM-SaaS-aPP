using Indotalent.Administration;
using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.EmployeeSelfService
{
    public class TrainingEmployeeIdRequest : ServiceRequest
    {
    }

    public class TrainingEmployeeIdResponse : ServiceResponse
    {
        public int EmployeeId { get; set; }
        public int BranchId { get; set; }
        public int DepartmentId { get; set; }
        public int SupervisorId { get; set; }
    }
    public interface ITrainingEmployeeIdHandler : IRequestHandler
    {
        TrainingEmployeeIdResponse EmployeeId(IDbConnection connection, TrainingEmployeeIdRequest request);
    }
    public class TrainingEmployeeIdHandler : ITrainingEmployeeIdHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public TrainingEmployeeIdHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public TrainingEmployeeIdResponse EmployeeId(IDbConnection connection, TrainingEmployeeIdRequest request)
        {
            var userId = -1;
            var employeeId = -1;
            var branchId = -1;
            var departmentId = -1;
            var supervisorId = -1;
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            if (user != null) userId = user.UserId;
            var employee = connection.TryFirst<EmployeeRow>(q => q
                 .SelectTableFields()
                 .Where(EmployeeRow.Fields.SystemUserId == userId));

            if (employee != null)
            {
                employeeId = employee.Id.Value;
                branchId = employee.BranchId.HasValue ? employee.BranchId.Value : -1;
                departmentId = employee.DepartmentId.HasValue ? employee.DepartmentId.Value : -1;
                supervisorId = employee.SupervisorId.HasValue ? employee.SupervisorId.Value : -1;
            }

            var result = new TrainingEmployeeIdResponse();
            result.EmployeeId = employeeId;
            result.BranchId = branchId;
            result.DepartmentId = departmentId;
            result.SupervisorId = supervisorId;
            return result;
        }
    }
}
