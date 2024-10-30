using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Performance.PromotionCompetencyRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Performance.PromotionCompetencyRow;

namespace Indotalent.Performance
{
    public interface IPromotionCompetencySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionCompetencySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionCompetencySaveHandler
    {
        public PromotionCompetencySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}