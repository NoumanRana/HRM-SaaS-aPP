using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Performance.PromotionRow;

namespace Indotalent.Performance
{
    public interface IPromotionDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionDeleteHandler
    {
        public PromotionDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}