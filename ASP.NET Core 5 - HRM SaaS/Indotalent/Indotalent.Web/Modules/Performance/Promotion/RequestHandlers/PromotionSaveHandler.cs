using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Performance.PromotionRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Performance.PromotionRow;

namespace Indotalent.Performance
{
    public interface IPromotionSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PromotionSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPromotionSaveHandler
    {
        public PromotionSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void BeforeSave()
        {
            base.BeforeSave();

            if (this.IsCreate)
            {
                if (Row.Number.ToLower().Equals("auto"))
                {
                    var tenant = UnitOfWork.Connection.ById<TenantRow>(Row.TenantId);
                    var request = new GetNextNumberRequest()
                    {
                        Prefix = tenant.PromotionNumberUseDate.Value ? tenant.PromotionNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.PromotionNumberPrefix,
                        Length = tenant.PromotionNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}