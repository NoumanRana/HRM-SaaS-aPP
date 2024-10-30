using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.EventRow>;
using MyRow = Indotalent.Operation.EventRow;

namespace Indotalent.Operation
{
    public interface IEventRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EventRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEventRetrieveHandler
    {
        public EventRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}