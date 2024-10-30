using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.ReimbursementDetailRow>;
using MyRow = Indotalent.Operation.ReimbursementDetailRow;

namespace Indotalent.Operation
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