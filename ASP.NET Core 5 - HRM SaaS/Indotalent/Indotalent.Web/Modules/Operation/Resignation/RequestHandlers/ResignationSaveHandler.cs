using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.ResignationRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.ResignationRow;

namespace Indotalent.Operation
{
    public interface IResignationSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ResignationSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IResignationSaveHandler
    {
        public ResignationSaveHandler(IRequestContext context)
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
                        Prefix = tenant.ResignationNumberUseDate.Value ? tenant.ResignationNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.ResignationNumberPrefix,
                        Length = tenant.ResignationNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}