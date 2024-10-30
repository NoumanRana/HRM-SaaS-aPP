using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.BusinessTripRow>;
using MyRow = Indotalent.EmployeeSelfService.BusinessTripRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IBusinessTripListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripListHandler
    {
        public BusinessTripListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}