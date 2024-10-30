using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Performance.PromotionReasonRow;

namespace Indotalent.Performance
{
    public interface IPromotionReasonDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionReasonDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionReasonDeleteHandler
    {
        public PromotionReasonDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}