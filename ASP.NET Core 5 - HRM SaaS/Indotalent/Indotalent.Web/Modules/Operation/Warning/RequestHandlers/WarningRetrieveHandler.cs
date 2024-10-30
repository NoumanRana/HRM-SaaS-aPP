using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.WarningRow>;
using MyRow = Indotalent.Operation.WarningRow;

namespace Indotalent.Operation
{
    public interface IWarningRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class WarningRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IWarningRetrieveHandler
    {
        public WarningRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}