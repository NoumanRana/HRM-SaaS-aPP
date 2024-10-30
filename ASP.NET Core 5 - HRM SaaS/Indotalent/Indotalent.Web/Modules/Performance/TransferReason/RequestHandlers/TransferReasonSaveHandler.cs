using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Performance.TransferReasonRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Performance.TransferReasonRow;

namespace Indotalent.Performance
{
    public interface ITransferReasonSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferReasonSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITransferReasonSaveHandler
    {
        public TransferReasonSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}