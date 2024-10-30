using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Recruitment.VacancyRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Recruitment.VacancyRow;

namespace Indotalent.Recruitment
{
    public interface IVacancySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVacancySaveHandler
    {
        public VacancySaveHandler(IRequestContext context)
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
                        Prefix = tenant.VacancyNumberUseDate.Value ? tenant.VacancyNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.VacancyNumberPrefix,
                        Length = tenant.VacancyNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}