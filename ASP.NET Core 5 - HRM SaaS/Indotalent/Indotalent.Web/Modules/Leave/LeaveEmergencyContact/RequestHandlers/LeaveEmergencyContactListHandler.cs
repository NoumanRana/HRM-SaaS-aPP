using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Leave.LeaveEmergencyContactRow>;
using MyRow = Indotalent.Leave.LeaveEmergencyContactRow;

namespace Indotalent.Leave
{
    public interface ILeaveEmergencyContactListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveEmergencyContactListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveEmergencyContactListHandler
    {
        public LeaveEmergencyContactListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}