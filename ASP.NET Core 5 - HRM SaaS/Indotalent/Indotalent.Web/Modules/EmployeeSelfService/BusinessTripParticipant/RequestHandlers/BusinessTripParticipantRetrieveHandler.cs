using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.BusinessTripParticipantRow>;
using MyRow = Indotalent.EmployeeSelfService.BusinessTripParticipantRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IBusinessTripParticipantRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripParticipantRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripParticipantRetrieveHandler
    {
        public BusinessTripParticipantRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}