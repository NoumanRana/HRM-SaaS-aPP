using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.AssetHandOverRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.AssetHandOverRow;

namespace Indotalent.Operation
{
    public interface IAssetHandOverSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AssetHandOverSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAssetHandOverSaveHandler
    {
        public AssetHandOverSaveHandler(IRequestContext context)
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
                        Prefix = tenant.AssetHandOverNumberUseDate.Value ? tenant.AssetHandOverNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.AssetHandOverNumberPrefix,
                        Length = tenant.AssetHandOverNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }

        }
    }
}