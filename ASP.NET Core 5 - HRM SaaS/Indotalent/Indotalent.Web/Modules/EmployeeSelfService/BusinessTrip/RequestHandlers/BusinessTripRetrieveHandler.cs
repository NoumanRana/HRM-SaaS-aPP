using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.BusinessTripRow>;
using MyRow = Indotalent.EmployeeSelfService.BusinessTripRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IBusinessTripRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripRetrieveHandler
    {
        public BusinessTripRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}