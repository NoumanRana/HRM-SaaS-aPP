using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Performance.TransferReasonRow>;
using MyRow = Indotalent.Performance.TransferReasonRow;

namespace Indotalent.Performance
{
    public interface ITransferReasonRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferReasonRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITransferReasonRetrieveHandler
    {
        public TransferReasonRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}