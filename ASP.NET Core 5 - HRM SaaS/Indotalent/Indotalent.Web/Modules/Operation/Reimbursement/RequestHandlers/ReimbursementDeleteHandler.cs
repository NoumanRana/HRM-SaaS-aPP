using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.ReimbursementRow;

namespace Indotalent.Operation
{
    public interface IReimbursementDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ReimbursementDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IReimbursementDeleteHandler
    {
        public ReimbursementDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}