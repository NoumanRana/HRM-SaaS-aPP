using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Performance.PromotionCompetencyRow;

namespace Indotalent.Performance
{
    public interface IPromotionCompetencyDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionCompetencyDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionCompetencyDeleteHandler
    {
        public PromotionCompetencyDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}