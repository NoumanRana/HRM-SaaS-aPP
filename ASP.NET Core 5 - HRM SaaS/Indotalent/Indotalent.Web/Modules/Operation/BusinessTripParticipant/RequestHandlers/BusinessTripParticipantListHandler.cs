using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.BusinessTripParticipantRow>;
using MyRow = Indotalent.Operation.BusinessTripParticipantRow;

namespace Indotalent.Operation
{
    public interface IBusinessTripParticipantListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripParticipantListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripParticipantListHandler
    {
        public BusinessTripParticipantListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}