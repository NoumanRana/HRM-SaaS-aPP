using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Performance.TransferCompetencyRow>;
using MyRow = Indotalent.Performance.TransferCompetencyRow;

namespace Indotalent.Performance
{
    public interface ITransferCompetencyRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferCompetencyRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITransferCompetencyRetrieveHandler
    {
        public TransferCompetencyRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}