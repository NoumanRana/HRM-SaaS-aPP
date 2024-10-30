using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Leave.LeaveTypeRow>;
using MyRow = Indotalent.Leave.LeaveTypeRow;

namespace Indotalent.Leave
{
    public interface ILeaveTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveTypeRetrieveHandler
    {
        public LeaveTypeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}