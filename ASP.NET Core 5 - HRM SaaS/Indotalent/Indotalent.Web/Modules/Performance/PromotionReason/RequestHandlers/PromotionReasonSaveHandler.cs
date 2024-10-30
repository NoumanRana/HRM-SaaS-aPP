using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Performance.PromotionReasonRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Performance.PromotionReasonRow;

namespace Indotalent.Performance
{
    public interface IPromotionReasonSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionReasonSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionReasonSaveHandler
    {
        public PromotionReasonSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}