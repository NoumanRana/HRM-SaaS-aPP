using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.TicketDetailRow>;
using MyRow = Indotalent.Operation.TicketDetailRow;

namespace Indotalent.Operation
{
    public interface ITicketDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TicketDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITicketDetailListHandler
    {
        public TicketDetailListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}