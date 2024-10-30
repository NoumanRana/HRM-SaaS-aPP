using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Performance.EvaluationRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Performance.EvaluationRow;

namespace Indotalent.Performance
{
    public interface IEvaluationSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EvaluationSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEvaluationSaveHandler
    {
        public EvaluationSaveHandler(IRequestContext context)
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
                        Prefix = tenant.EvaluationNumberUseDate.Value ? tenant.EvaluationNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.EvaluationNumberPrefix,
                        Length = tenant.EvaluationNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}