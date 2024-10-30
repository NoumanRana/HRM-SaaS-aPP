using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Payrolls
{
    public class GradeCurrencyRequest : ServiceRequest
    {
    }

    public class GradeCurrencyResponse : ServiceResponse
    {
        public string Currency { get; set; }
    }
    public interface IGradeCurrencyHandler : IRequestHandler
    {
        GradeCurrencyResponse Currency(IDbConnection connection, GradeCurrencyRequest request);
    }
    public class GradeCurrencyHandler : IGradeCurrencyHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public GradeCurrencyHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public GradeCurrencyResponse Currency(IDbConnection connection, GradeCurrencyRequest request)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            var tenant = connection.First<TenantRow>(x => x.SelectTableFields().Where(TenantRow.Fields.TenantId == user.TenantId));
            var result = new GradeCurrencyResponse();
            result.Currency = tenant.Currency;
            return result;
        }
    }
}
