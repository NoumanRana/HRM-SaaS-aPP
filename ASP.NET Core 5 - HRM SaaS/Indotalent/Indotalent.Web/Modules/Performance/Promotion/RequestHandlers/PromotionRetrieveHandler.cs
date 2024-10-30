using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Performance.PromotionRow>;
using MyRow = Indotalent.Performance.PromotionRow;

namespace Indotalent.Performance
{
    public interface IPromotionRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionRetrieveHandler
    {
        public PromotionRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}