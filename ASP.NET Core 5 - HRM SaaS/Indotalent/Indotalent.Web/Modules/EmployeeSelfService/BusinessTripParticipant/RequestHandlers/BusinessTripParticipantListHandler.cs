using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.BusinessTripParticipantRow>;
using MyRow = Indotalent.EmployeeSelfService.BusinessTripParticipantRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IBusinessTripParticipantListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripParticipantListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripParticipantListHandler
    {
        public BusinessTripParticipantListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}