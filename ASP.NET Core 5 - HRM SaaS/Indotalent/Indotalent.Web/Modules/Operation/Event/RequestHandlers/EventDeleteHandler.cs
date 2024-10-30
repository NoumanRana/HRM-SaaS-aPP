using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.EventRow;

namespace Indotalent.Operation
{
    public interface IEventDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EventDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEventDeleteHandler
    {
        public EventDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}