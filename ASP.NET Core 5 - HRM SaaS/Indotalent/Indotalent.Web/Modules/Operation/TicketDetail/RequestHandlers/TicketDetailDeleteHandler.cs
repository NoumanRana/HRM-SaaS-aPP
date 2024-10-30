using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.TicketDetailRow;

namespace Indotalent.Operation
{
    public interface ITicketDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TicketDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITicketDetailDeleteHandler
    {
        public TicketDetailDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}