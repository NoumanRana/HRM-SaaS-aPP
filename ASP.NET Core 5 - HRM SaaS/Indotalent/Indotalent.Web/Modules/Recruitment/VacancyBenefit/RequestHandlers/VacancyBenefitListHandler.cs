using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Recruitment.VacancyBenefitRow>;
using MyRow = Indotalent.Recruitment.VacancyBenefitRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyBenefitListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyBenefitListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyBenefitListHandler
    {
        public VacancyBenefitListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}