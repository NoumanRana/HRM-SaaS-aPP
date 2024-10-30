using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Leave.LeaveRequestRow;

namespace Indotalent.Leave
{
    public interface ILeaveRequestDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveRequestDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveRequestDeleteHandler
    {
        public LeaveRequestDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}