using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.WarningRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.WarningRow;

namespace Indotalent.Operation
{
    public interface IWarningSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class WarningSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IWarningSaveHandler
    {
        public WarningSaveHandler(IRequestContext context)
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
                        Prefix = tenant.WarningNumberUseDate.Value ? tenant.WarningNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.WarningNumberPrefix,
                        Length = tenant.WarningNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }


        }
    }
}