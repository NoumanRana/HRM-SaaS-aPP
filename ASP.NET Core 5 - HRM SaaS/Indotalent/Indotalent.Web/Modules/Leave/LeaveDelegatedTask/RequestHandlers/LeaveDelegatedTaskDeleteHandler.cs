using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Leave.LeaveDelegatedTaskRow;

namespace Indotalent.Leave
{
    public interface ILeaveDelegatedTaskDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveDelegatedTaskDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveDelegatedTaskDeleteHandler
    {
        public LeaveDelegatedTaskDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}