﻿using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Operation
{
    public class ReimbursementCurrencyRequest : ServiceRequest
    {
    }

    public class ReimbursementCurrencyResponse : ServiceResponse
    {
        public string Currency { get; set; }
    }
    public interface IReimbursementCurrencyHandler : IRequestHandler
    {
        ReimbursementCurrencyResponse Currency(IDbConnection connection, ReimbursementCurrencyRequest request);
    }
    public class ReimbursementCurrencyHandler : IReimbursementCurrencyHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public ReimbursementCurrencyHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public ReimbursementCurrencyResponse Currency(IDbConnection connection, ReimbursementCurrencyRequest request)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            var tenant = connection.First<TenantRow>(x => x.SelectTableFields().Where(TenantRow.Fields.TenantId == user.TenantId));
            var result = new ReimbursementCurrencyResponse();
            result.Currency = tenant.Currency;
            return result;
        }
    }
}
