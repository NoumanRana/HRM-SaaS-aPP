using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Performance.TransferRow>;
using MyRow = Indotalent.Performance.TransferRow;

namespace Indotalent.Performance
{
    public interface ITransferRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITransferRetrieveHandler
    {
        public TransferRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}