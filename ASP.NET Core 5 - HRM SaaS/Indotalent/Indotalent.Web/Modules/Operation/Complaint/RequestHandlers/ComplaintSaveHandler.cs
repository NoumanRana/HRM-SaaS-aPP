using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.ComplaintRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.ComplaintRow;

namespace Indotalent.Operation
{
    public interface IComplaintSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ComplaintSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IComplaintSaveHandler
    {
        public ComplaintSaveHandler(IRequestContext context)
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
                        Prefix = tenant.ComplaintNumberUseDate.Value ? tenant.ComplaintNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.ComplaintNumberPrefix,
                        Length = tenant.ComplaintNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }


        }
    }
}