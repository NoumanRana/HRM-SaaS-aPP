using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Performance.PromotionReasonRow>;
using MyRow = Indotalent.Performance.PromotionReasonRow;

namespace Indotalent.Performance
{
    public interface IPromotionReasonListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionReasonListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionReasonListHandler
    {
        public PromotionReasonListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}