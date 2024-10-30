using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.EmployeeSelfService.BusinessTripRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IBusinessTripDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripDeleteHandler
    {
        public BusinessTripDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}