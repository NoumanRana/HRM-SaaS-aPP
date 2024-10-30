using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.EmployeeSelfService.TicketRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ITicketDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TicketDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITicketDeleteHandler
    {
        public TicketDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}