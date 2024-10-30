using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Performance.PromotionReasonRow>;
using MyRow = Indotalent.Performance.PromotionReasonRow;

namespace Indotalent.Performance
{
    public interface IPromotionReasonRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionReasonRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionReasonRetrieveHandler
    {
        public PromotionReasonRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}