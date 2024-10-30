using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.ReimbursementDetailRow>;
using MyRow = Indotalent.EmployeeSelfService.ReimbursementDetailRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IReimbursementDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ReimbursementDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IReimbursementDetailListHandler
    {
        public ReimbursementDetailListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}