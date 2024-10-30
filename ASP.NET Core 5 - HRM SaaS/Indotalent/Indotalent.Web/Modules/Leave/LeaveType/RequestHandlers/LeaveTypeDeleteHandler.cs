using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Leave.LeaveTypeRow;

namespace Indotalent.Leave
{
    public interface ILeaveTypeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveTypeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveTypeDeleteHandler
    {
        public LeaveTypeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}