using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Performance.AppraisalRow>;
using MyRow = Indotalent.Performance.AppraisalRow;

namespace Indotalent.Performance
{
    public interface IAppraisalListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AppraisalListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAppraisalListHandler
    {
        public AppraisalListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}