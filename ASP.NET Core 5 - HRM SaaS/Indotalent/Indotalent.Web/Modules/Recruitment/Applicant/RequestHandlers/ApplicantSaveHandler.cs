using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Recruitment.ApplicantRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Recruitment.ApplicantRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantSaveHandler
    {
        public ApplicantSaveHandler(IRequestContext context)
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
                        Prefix = tenant.ApplicantNumberUseDate.Value ? tenant.ApplicantNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.ApplicantNumberPrefix,
                        Length = tenant.ApplicantNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}