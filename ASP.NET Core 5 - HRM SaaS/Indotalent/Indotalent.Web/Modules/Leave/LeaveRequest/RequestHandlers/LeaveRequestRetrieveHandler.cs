using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Leave.LeaveRequestRow>;
using MyRow = Indotalent.Leave.LeaveRequestRow;

namespace Indotalent.Leave
{
    public interface ILeaveRequestRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveRequestRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveRequestRetrieveHandler
    {
        public LeaveRequestRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}