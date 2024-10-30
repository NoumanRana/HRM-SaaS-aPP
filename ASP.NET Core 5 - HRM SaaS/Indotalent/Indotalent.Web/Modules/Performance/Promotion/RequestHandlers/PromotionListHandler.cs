using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Performance.PromotionRow>;
using MyRow = Indotalent.Performance.PromotionRow;

namespace Indotalent.Performance
{
    public interface IPromotionListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionListHandler
    {
        public PromotionListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}