using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Leave.LeaveEmergencyContactRow;

namespace Indotalent.Leave
{
    public interface ILeaveEmergencyContactDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveEmergencyContactDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveEmergencyContactDeleteHandler
    {
        public LeaveEmergencyContactDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}