using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Performance.TransferCompetencyRow>;
using MyRow = Indotalent.Performance.TransferCompetencyRow;

namespace Indotalent.Performance
{
    public interface ITransferCompetencyListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferCompetencyListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITransferCompetencyListHandler
    {
        public TransferCompetencyListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}