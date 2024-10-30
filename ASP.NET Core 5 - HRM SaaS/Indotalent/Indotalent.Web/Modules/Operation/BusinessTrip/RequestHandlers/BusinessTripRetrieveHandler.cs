using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.BusinessTripRow>;
using MyRow = Indotalent.Operation.BusinessTripRow;

namespace Indotalent.Operation
{
    public interface IBusinessTripRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripRetrieveHandler
    {
        public BusinessTripRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}