using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Leave.LeaveDelegatedTaskRow>;
using MyRow = Indotalent.Leave.LeaveDelegatedTaskRow;

namespace Indotalent.Leave
{
    public interface ILeaveDelegatedTaskListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveDelegatedTaskListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveDelegatedTaskListHandler
    {
        public LeaveDelegatedTaskListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}