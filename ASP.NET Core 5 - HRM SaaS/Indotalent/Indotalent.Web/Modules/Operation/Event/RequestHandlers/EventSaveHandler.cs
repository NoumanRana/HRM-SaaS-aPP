using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.EventRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.EventRow;

namespace Indotalent.Operation
{
    public interface IEventSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EventSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEventSaveHandler
    {
        public EventSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}