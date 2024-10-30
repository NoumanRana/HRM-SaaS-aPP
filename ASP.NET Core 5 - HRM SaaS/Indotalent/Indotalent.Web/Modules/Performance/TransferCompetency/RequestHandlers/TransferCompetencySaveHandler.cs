using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Performance.TransferCompetencyRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Performance.TransferCompetencyRow;

namespace Indotalent.Performance
{
    public interface ITransferCompetencySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferCompetencySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITransferCompetencySaveHandler
    {
        public TransferCompetencySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}