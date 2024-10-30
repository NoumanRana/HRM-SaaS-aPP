using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.MeetingParticipantRow>;
using MyRow = Indotalent.Operation.MeetingParticipantRow;

namespace Indotalent.Operation
{
    public interface IMeetingParticipantRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingParticipantRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingParticipantRetrieveHandler
    {
        public MeetingParticipantRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}