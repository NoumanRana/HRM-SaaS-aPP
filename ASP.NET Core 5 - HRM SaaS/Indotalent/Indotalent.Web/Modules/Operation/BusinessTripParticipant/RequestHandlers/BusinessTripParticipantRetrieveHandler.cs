using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.BusinessTripParticipantRow>;
using MyRow = Indotalent.Operation.BusinessTripParticipantRow;

namespace Indotalent.Operation
{
    public interface IBusinessTripParticipantRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripParticipantRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripParticipantRetrieveHandler
    {
        public BusinessTripParticipantRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}