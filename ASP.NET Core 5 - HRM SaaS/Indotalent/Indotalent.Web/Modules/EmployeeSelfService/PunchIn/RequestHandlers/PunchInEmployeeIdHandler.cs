using Indotalent.Administration;
using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.EmployeeSelfService
{
    public class PunchInEmployeeIdRequest : ServiceRequest
    {
    }

    public class PunchInEmployeeIdResponse : ServiceResponse
    {
        public int EmployeeId { get; set; }
    }
    public interface IPunchInEmployeeIdHandler : IRequestHandler
    {
        PunchInEmployeeIdResponse EmployeeId(IDbConnection connection, PunchInEmployeeIdRequest request);
    }
    public class PunchInEmployeeIdHandler : IPunchInEmployeeIdHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public PunchInEmployeeIdHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public PunchInEmployeeIdResponse EmployeeId(IDbConnection connection, PunchInEmployeeIdRequest request)
        {
            var userId = -1;
            var employeeId = -1;
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            if (user != null) userId = user.UserId;
            var employee = connection.TryFirst<EmployeeRow>(q => q
                 .SelectTableFields()
                 .Where(EmployeeRow.Fields.SystemUserId == userId));
            if (employee != null) employeeId = employee.Id.Value;

            var result = new PunchInEmployeeIdResponse();
            result.EmployeeId = employeeId;
            return result;
        }
    }
}
