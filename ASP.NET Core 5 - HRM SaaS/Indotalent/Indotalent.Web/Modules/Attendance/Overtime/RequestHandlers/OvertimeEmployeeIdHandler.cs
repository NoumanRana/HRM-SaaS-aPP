using Indotalent.Administration;
using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Attendance
{
    public class OvertimeEmployeeIdRequest : ServiceRequest
    {
    }

    public class OvertimeEmployeeIdResponse : ServiceResponse
    {
        public int EmployeeId { get; set; }
    }
    public interface IOvertimeEmployeeIdHandler : IRequestHandler
    {
        OvertimeEmployeeIdResponse EmployeeId(IDbConnection connection, OvertimeEmployeeIdRequest request);
    }
    public class OvertimeEmployeeIdHandler : IOvertimeEmployeeIdHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public OvertimeEmployeeIdHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public OvertimeEmployeeIdResponse EmployeeId(IDbConnection connection, OvertimeEmployeeIdRequest request)
        {
            var userId = -1;
            var employeeId = -1;
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            if (user != null) userId = user.UserId;
            var employee = connection.TryFirst<EmployeeRow>(q => q
                 .SelectTableFields()
                 .Where(EmployeeRow.Fields.SystemUserId == userId));
            if (employee != null) employeeId = employee.Id.Value;

            var result = new OvertimeEmployeeIdResponse();
            result.EmployeeId = employeeId;
            return result;
        }
    }
}
