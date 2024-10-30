using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Performance.AppraisalDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Performance.AppraisalDetailRow;

namespace Indotalent.Performance
{
    public interface IAppraisalDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AppraisalDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAppraisalDetailSaveHandler
    {
        public AppraisalDetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}