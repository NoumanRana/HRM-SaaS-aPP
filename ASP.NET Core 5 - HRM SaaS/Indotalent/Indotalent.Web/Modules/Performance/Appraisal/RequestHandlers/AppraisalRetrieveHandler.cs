using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Performance.AppraisalRow>;
using MyRow = Indotalent.Performance.AppraisalRow;

namespace Indotalent.Performance
{
    public interface IAppraisalRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AppraisalRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAppraisalRetrieveHandler
    {
        public AppraisalRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}