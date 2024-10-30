using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.TicketDetailRow>;
using MyRow = Indotalent.EmployeeSelfService.TicketDetailRow;

namespace Indotalent.EmployeeSelfService
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