using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.SOPRow>;
using MyRow = Indotalent.Operation.SOPRow;

namespace Indotalent.Operation
{
    public interface ISOPRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SOPRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISOPRetrieveHandler
    {
        public SOPRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}