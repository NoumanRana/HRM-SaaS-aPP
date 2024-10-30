using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Performance.TransferReasonRow>;
using MyRow = Indotalent.Performance.TransferReasonRow;

namespace Indotalent.Performance
{
    public interface ITransferReasonListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferReasonListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITransferReasonListHandler
    {
        public TransferReasonListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}