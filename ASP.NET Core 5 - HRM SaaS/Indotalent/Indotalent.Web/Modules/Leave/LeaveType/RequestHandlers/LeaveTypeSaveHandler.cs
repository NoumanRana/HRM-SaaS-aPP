using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Leave.LeaveTypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Leave.LeaveTypeRow;

namespace Indotalent.Leave
{
    public interface ILeaveTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveTypeSaveHandler
    {
        public LeaveTypeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}