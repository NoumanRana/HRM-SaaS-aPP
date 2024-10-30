using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.EmployeeSelfService.MeetingParticipantRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IMeetingParticipantDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingParticipantDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingParticipantDeleteHandler
    {
        public MeetingParticipantDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}