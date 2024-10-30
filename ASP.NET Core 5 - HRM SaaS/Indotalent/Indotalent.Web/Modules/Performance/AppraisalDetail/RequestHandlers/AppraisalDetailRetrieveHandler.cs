using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Performance.AppraisalDetailRow>;
using MyRow = Indotalent.Performance.AppraisalDetailRow;

namespace Indotalent.Performance
{
    public interface IAppraisalDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AppraisalDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAppraisalDetailRetrieveHandler
    {
        public AppraisalDetailRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}