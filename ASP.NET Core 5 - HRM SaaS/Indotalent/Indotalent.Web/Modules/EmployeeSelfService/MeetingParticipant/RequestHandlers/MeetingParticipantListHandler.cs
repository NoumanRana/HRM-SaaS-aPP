using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.MeetingParticipantRow>;
using MyRow = Indotalent.EmployeeSelfService.MeetingParticipantRow;

namespace Indotalent.EmployeeSelfService
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