using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.BusinessTripParticipantRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.BusinessTripParticipantRow;

namespace Indotalent.Operation
{
    public interface IBusinessTripParticipantSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripParticipantSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripParticipantSaveHandler
    {
        public BusinessTripParticipantSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}