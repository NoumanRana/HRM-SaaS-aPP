using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.EventRow>;
using MyRow = Indotalent.Operation.EventRow;

namespace Indotalent.Operation
{
    public interface IEventListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EventListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEventListHandler
    {
        public EventListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}