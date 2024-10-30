using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Recruitment.VacancyBenefitRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Recruitment.VacancyBenefitRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyBenefitSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyBenefitSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyBenefitSaveHandler
    {
        public VacancyBenefitSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}