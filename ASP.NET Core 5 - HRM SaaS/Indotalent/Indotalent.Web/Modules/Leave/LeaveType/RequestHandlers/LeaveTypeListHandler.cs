using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Leave.LeaveTypeRow>;
using MyRow = Indotalent.Leave.LeaveTypeRow;

namespace Indotalent.Leave
{
    public interface ILeaveTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveTypeListHandler
    {
        public LeaveTypeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}