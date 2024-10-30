using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.ReimbursementRow>;
using MyRow = Indotalent.Operation.ReimbursementRow;

namespace Indotalent.Operation
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