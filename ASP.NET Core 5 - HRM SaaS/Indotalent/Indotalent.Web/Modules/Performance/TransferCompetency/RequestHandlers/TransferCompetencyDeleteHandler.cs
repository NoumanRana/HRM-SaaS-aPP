using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Performance.TransferCompetencyRow;

namespace Indotalent.Performance
{
    public interface ITransferCompetencyDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferCompetencyDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITransferCompetencyDeleteHandler
    {
        public TransferCompetencyDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}