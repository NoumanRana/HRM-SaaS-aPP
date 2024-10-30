using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Leave.LeaveDelegatedTaskRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Leave.LeaveDelegatedTaskRow;

namespace Indotalent.Leave
{
    public interface ILeaveDelegatedTaskSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveDelegatedTaskSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveDelegatedTaskSaveHandler
    {
        public LeaveDelegatedTaskSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}