using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Performance.PromotionCompetencyRow>;
using MyRow = Indotalent.Performance.PromotionCompetencyRow;

namespace Indotalent.Performance
{
    public interface IPromotionCompetencyRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionCompetencyRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionCompetencyRetrieveHandler
    {
        public PromotionCompetencyRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}