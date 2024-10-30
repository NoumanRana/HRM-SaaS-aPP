using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.ReimbursementRow>;
using MyRow = Indotalent.EmployeeSelfService.ReimbursementRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IReimbursementRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReimbursementRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IReimbursementRetrieveHandler
    {
        public ReimbursementRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}