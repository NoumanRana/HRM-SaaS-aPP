using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Leave.LeaveEmergencyContactRow>;
using MyRow = Indotalent.Leave.LeaveEmergencyContactRow;

namespace Indotalent.Leave
{
    public interface ILeaveEmergencyContactRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveEmergencyContactRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveEmergencyContactRetrieveHandler
    {
        public LeaveEmergencyContactRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}