using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.TerminationRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.TerminationRow;

namespace Indotalent.Operation
{
    public interface ITerminationSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TerminationSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITerminationSaveHandler
    {
        public TerminationSaveHandler(IRequestContext context)
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
                        Prefix = tenant.TerminationNumberUseDate.Value ? tenant.TerminationNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.TerminationNumberPrefix,
                        Length = tenant.TerminationNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}