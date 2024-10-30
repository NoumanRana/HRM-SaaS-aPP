using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.ReimbursementRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.ReimbursementRow;

namespace Indotalent.Operation
{
    public interface IReimbursementSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReimbursementSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IReimbursementSaveHandler
    {
        public ReimbursementSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void BeforeSave()
        {
            base.BeforeSave();

            Row.TotalAmount = 0;
            foreach (var item in Row.ItemList)
            {
                Row.TotalAmount += item.Amount;
            }

            if (this.IsCreate)
            {
                if (Row.Number.ToLower().Equals("auto"))
                {
                    var tenant = UnitOfWork.Connection.ById<TenantRow>(Row.TenantId);
                    var request = new GetNextNumberRequest()
                    {
                        Prefix = tenant.ReimbursementNumberUseDate.Value ? tenant.ReimbursementNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.ReimbursementNumberPrefix,
                        Length = tenant.ReimbursementNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}