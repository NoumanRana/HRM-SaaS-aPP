using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.TicketRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.TicketRow;

namespace Indotalent.Operation
{
    public interface ITicketSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TicketSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITicketSaveHandler
    {
        public TicketSaveHandler(IRequestContext context)
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
                        Prefix = tenant.TicketNumberUseDate.Value ? tenant.TicketNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.TicketNumberPrefix,
                        Length = tenant.TicketNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}