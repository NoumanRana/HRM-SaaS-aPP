using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.TicketRow>;
using MyRow = Indotalent.EmployeeSelfService.TicketRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ITicketRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TicketRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITicketRetrieveHandler
    {
        public TicketRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}