using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Payrolls
{
    public class PayrollCurrencyRequest : ServiceRequest
    {
    }

    public class PayrollCurrencyResponse : ServiceResponse
    {
        public string Currency { get; set; }
    }
    public interface IPayrollCurrencyHandler : IRequestHandler
    {
        PayrollCurrencyResponse Currency(IDbConnection connection, PayrollCurrencyRequest request);
    }
    public class PayrollCurrencyHandler : IPayrollCurrencyHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public PayrollCurrencyHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public PayrollCurrencyResponse Currency(IDbConnection connection, PayrollCurrencyRequest request)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            var tenant = connection.First<TenantRow>(x => x.SelectTableFields().Where(TenantRow.Fields.TenantId == user.TenantId));
            var result = new PayrollCurrencyResponse();
            result.Currency = tenant.Currency;
            return result;
        }
    }
}
