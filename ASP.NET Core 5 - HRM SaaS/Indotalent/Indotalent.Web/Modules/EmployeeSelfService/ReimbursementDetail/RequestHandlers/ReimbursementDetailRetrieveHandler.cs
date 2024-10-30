using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.ReimbursementDetailRow>;
using MyRow = Indotalent.EmployeeSelfService.ReimbursementDetailRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IReimbursementDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReimbursementDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IReimbursementDetailRetrieveHandler
    {
        public ReimbursementDetailRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}