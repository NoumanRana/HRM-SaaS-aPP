using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Performance.TransferRow>;
using MyRow = Indotalent.Performance.TransferRow;

namespace Indotalent.Performance
{
    public interface ITransferListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITransferListHandler
    {
        public TransferListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}