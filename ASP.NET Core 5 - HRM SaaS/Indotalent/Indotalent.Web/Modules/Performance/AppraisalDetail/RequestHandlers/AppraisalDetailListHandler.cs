using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Performance.AppraisalDetailRow>;
using MyRow = Indotalent.Performance.AppraisalDetailRow;

namespace Indotalent.Performance
{
    public interface IAppraisalDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AppraisalDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAppraisalDetailListHandler
    {
        public AppraisalDetailListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}