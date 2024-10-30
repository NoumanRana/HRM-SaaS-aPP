using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.TicketRow>;
using MyRow = Indotalent.Operation.TicketRow;

namespace Indotalent.Operation
{
    public interface ITicketListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TicketListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITicketListHandler
    {
        public TicketListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}