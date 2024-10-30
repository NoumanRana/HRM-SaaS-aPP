using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Performance.TransferReasonRow;

namespace Indotalent.Performance
{
    public interface ITransferReasonDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferReasonDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITransferReasonDeleteHandler
    {
        public TransferReasonDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}