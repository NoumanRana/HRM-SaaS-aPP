using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.EmployeeSelfService.BusinessTripParticipantRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.EmployeeSelfService.BusinessTripParticipantRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IBusinessTripParticipantSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripParticipantSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripParticipantSaveHandler
    {
        public BusinessTripParticipantSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}