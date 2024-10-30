using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.LeaveRequestRow>;
using MyRow = Indotalent.EmployeeSelfService.LeaveRequestRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ILeaveRequestRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveRequestRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveRequestRetrieveHandler
    {
        public LeaveRequestRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}