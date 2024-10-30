using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.ReimbursementRow>;
using MyRow = Indotalent.Operation.ReimbursementRow;

namespace Indotalent.Operation
{
    public interface IReimbursementListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ReimbursementListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IReimbursementListHandler
    {
        public ReimbursementListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}