using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Leave.LeaveEmergencyContactRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Leave.LeaveEmergencyContactRow;

namespace Indotalent.Leave
{
    public interface ILeaveEmergencyContactSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveEmergencyContactSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveEmergencyContactSaveHandler
    {
        public LeaveEmergencyContactSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}