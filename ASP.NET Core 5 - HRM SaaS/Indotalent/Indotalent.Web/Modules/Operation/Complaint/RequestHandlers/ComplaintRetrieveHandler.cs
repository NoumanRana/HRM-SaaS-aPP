using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.ComplaintRow>;
using MyRow = Indotalent.Operation.ComplaintRow;

namespace Indotalent.Operation
{
    public interface IComplaintRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ComplaintRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IComplaintRetrieveHandler
    {
        public ComplaintRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}