using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Performance.TransferRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Performance.TransferRow;

namespace Indotalent.Performance
{
    public interface ITransferSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITransferSaveHandler
    {
        public TransferSaveHandler(IRequestContext context)
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
                        Prefix = tenant.TransferNumberUseDate.Value ? tenant.TransferNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.TransferNumberPrefix,
                        Length = tenant.TransferNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}