using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.EmployeeSelfService.TicketDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.EmployeeSelfService.TicketDetailRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ITicketDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TicketDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITicketDetailSaveHandler
    {
        public TicketDetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}