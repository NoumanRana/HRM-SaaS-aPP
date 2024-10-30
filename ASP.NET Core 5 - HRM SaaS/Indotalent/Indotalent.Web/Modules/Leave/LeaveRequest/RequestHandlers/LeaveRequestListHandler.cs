using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Leave.LeaveRequestRow>;
using MyRow = Indotalent.Leave.LeaveRequestRow;

namespace Indotalent.Leave
{
    public interface ILeaveRequestListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveRequestListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveRequestListHandler
    {
        public LeaveRequestListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}