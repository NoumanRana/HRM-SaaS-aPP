using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Performance.TransferRow;

namespace Indotalent.Performance
{
    public interface ITransferDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITransferDeleteHandler
    {
        public TransferDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}