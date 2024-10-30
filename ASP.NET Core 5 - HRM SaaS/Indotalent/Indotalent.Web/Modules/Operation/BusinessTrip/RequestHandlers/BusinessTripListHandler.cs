using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.BusinessTripRow>;
using MyRow = Indotalent.Operation.BusinessTripRow;

namespace Indotalent.Operation
{
    public interface IBusinessTripListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripListHandler
    {
        public BusinessTripListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}