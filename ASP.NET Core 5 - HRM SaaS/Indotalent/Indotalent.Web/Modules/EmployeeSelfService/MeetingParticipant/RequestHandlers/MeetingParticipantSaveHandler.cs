using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.EmployeeSelfService.MeetingParticipantRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.EmployeeSelfService.MeetingParticipantRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IMeetingParticipantSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingParticipantSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingParticipantSaveHandler
    {
        public MeetingParticipantSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}