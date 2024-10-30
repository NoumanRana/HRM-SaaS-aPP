using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Performance.PromotionCompetencyRow>;
using MyRow = Indotalent.Performance.PromotionCompetencyRow;

namespace Indotalent.Performance
{
    public interface IPromotionCompetencyListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionCompetencyListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionCompetencyListHandler
    {
        public PromotionCompetencyListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}