using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.AssetRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.AssetRow;

namespace Indotalent.Operation
{
    public interface IAssetSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AssetSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAssetSaveHandler
    {
        public AssetSaveHandler(IRequestContext context)
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
                        Prefix = tenant.AssetNumberUseDate.Value ? tenant.AssetNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.AssetNumberPrefix,
                        Length = tenant.AssetNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }

            if (String.IsNullOrEmpty(Row.AssetTagNumber)) Row.AssetTagNumber = Row.Number;

        }
    }
}