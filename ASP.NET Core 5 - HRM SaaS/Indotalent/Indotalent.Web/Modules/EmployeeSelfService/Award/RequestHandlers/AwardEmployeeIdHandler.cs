using Indotalent.Administration;
using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.EmployeeSelfService
{
    public class AwardEmployeeIdRequest : ServiceRequest
    {
    }

    public class AwardEmployeeIdResponse : ServiceResponse
    {
        public int EmployeeId { get; set; }
    }
    public interface IAwardEmployeeIdHandler : IRequestHandler
    {
        AwardEmployeeIdResponse EmployeeId(IDbConnection connection, AwardEmployeeIdRequest request);
    }
    public class AwardEmployeeIdHandler : IAwardEmployeeIdHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public AwardEmployeeIdHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public AwardEmployeeIdResponse EmployeeId(IDbConnection connection, AwardEmployeeIdRequest request)
        {
            var userId = -1;
            var employeeId = -1;
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            if (user != null) userId = user.UserId;
            var employee = connection.TryFirst<EmployeeRow>(q => q
                 .SelectTableFields()
                 .Where(EmployeeRow.Fields.SystemUserId == userId));
            if (employee != null) employeeId = employee.Id.Value;

            var result = new AwardEmployeeIdResponse();
            result.EmployeeId = employeeId;
            return result;
        }
    }
}
