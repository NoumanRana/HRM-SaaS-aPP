using Indotalent.Administration;
using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.EmployeeSelfService
{
    public class LeaveRequestEmployeeIdRequest : ServiceRequest
    {
    }

    public class LeaveRequestEmployeeIdResponse : ServiceResponse
    {
        public int EmployeeId { get; set; }
    }
    public interface ILeaveRequestEmployeeIdHandler : IRequestHandler
    {
        LeaveRequestEmployeeIdResponse EmployeeId(IDbConnection connection, LeaveRequestEmployeeIdRequest request);
    }
    public class LeaveRequestEmployeeIdHandler : ILeaveRequestEmployeeIdHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public LeaveRequestEmployeeIdHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public LeaveRequestEmployeeIdResponse EmployeeId(IDbConnection connection, LeaveRequestEmployeeIdRequest request)
        {
            var userId = -1;
            var employeeId = -1;
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            if (user != null) userId = user.UserId;
            var employee = connection.TryFirst<EmployeeRow>(q => q
                 .SelectTableFields()
                 .Where(EmployeeRow.Fields.SystemUserId == userId));
            if (employee != null) employeeId = employee.Id.Value;

            var result = new LeaveRequestEmployeeIdResponse();
            result.EmployeeId = employeeId;
            return result;
        }
    }
}
