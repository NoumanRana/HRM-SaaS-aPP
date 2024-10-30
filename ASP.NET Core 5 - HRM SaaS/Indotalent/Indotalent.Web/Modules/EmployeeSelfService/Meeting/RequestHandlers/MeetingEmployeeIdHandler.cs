using Indotalent.Administration;
using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.EmployeeSelfService
{
    public class MeetingEmployeeIdRequest : ServiceRequest
    {
    }

    public class MeetingEmployeeIdResponse : ServiceResponse
    {
        public int EmployeeId { get; set; }
        public int BranchId { get; set; }
        public int DepartmentId { get; set; }
        public int SupervisorId { get; set; }
    }
    public interface IMeetingEmployeeIdHandler : IRequestHandler
    {
        MeetingEmployeeIdResponse EmployeeId(IDbConnection connection, MeetingEmployeeIdRequest request);
    }
    public class MeetingEmployeeIdHandler : IMeetingEmployeeIdHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public MeetingEmployeeIdHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public MeetingEmployeeIdResponse EmployeeId(IDbConnection connection, MeetingEmployeeIdRequest request)
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

            var result = new MeetingEmployeeIdResponse();
            result.EmployeeId = employeeId;
            result.BranchId = branchId;
            result.DepartmentId = departmentId;
            result.SupervisorId = supervisorId;
            return result;
        }
    }
}
