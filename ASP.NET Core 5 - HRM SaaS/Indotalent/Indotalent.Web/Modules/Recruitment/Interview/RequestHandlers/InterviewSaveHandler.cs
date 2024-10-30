using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Recruitment.InterviewRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Recruitment.InterviewRow;

namespace Indotalent.Recruitment
{
    public interface IInterviewSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InterviewSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInterviewSaveHandler
    {
        public InterviewSaveHandler(IRequestContext context)
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
                        Prefix = tenant.InterviewNumberUseDate.Value ? tenant.InterviewNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.InterviewNumberPrefix,
                        Length = tenant.InterviewNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }
        }
    }
}