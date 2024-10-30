using Indotalent.Administration;
using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.EmployeeSelfService
{
    public class WarningEmployeeIdRequest : ServiceRequest
    {
    }

    public class WarningEmployeeIdResponse : ServiceResponse
    {
        public int EmployeeId { get; set; }
    }
    public interface IWarningEmployeeIdHandler : IRequestHandler
    {
        WarningEmployeeIdResponse EmployeeId(IDbConnection connection, WarningEmployeeIdRequest request);
    }
    public class WarningEmployeeIdHandler : IWarningEmployeeIdHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public WarningEmployeeIdHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public WarningEmployeeIdResponse EmployeeId(IDbConnection connection, WarningEmployeeIdRequest request)
        {
            var userId = -1;
            var employeeId = -1;
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            if (user != null) userId = user.UserId;
            var employee = connection.TryFirst<EmployeeRow>(q => q
                 .SelectTableFields()
                 .Where(EmployeeRow.Fields.SystemUserId == userId));
            if (employee != null) employeeId = employee.Id.Value;

            var result = new WarningEmployeeIdResponse();
            result.EmployeeId = employeeId;
            return result;
        }
    }
}
