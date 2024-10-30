using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.ReimbursementDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.ReimbursementDetailRow;

namespace Indotalent.Operation
{
    public interface IReimbursementDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReimbursementDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IReimbursementDetailSaveHandler
    {
        public ReimbursementDetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}