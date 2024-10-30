using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.SOPRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.SOPRow;

namespace Indotalent.Operation
{
    public interface ISOPSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SOPSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISOPSaveHandler
    {
        public SOPSaveHandler(IRequestContext context)
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
                        Prefix = tenant.SOPNumberUseDate.Value ? tenant.SOPNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.SOPNumberPrefix,
                        Length = tenant.SOPNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}