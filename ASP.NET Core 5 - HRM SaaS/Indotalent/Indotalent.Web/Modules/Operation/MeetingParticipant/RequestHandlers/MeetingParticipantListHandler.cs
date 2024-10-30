using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.MeetingParticipantRow>;
using MyRow = Indotalent.Operation.MeetingParticipantRow;

namespace Indotalent.Operation
{
    public interface IMeetingParticipantListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingParticipantListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingParticipantListHandler
    {
        public MeetingParticipantListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}