using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.TicketDetailRow>;
using MyRow = Indotalent.EmployeeSelfService.TicketDetailRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ITicketDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TicketDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITicketDetailRetrieveHandler
    {
        public TicketDetailRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}