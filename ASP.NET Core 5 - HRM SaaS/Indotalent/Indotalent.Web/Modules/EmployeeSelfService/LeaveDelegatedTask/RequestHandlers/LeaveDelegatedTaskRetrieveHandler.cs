using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.LeaveDelegatedTaskRow>;
using MyRow = Indotalent.EmployeeSelfService.LeaveDelegatedTaskRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ILeaveDelegatedTaskRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveDelegatedTaskRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveDelegatedTaskRetrieveHandler
    {
        public LeaveDelegatedTaskRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}