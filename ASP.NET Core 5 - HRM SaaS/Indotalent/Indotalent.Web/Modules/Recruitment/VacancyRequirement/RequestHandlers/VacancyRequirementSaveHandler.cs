using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Recruitment.VacancyRequirementRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Recruitment.VacancyRequirementRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyRequirementSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyRequirementSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyRequirementSaveHandler
    {
        public VacancyRequirementSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}