using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Recruitment.VacancyRequirementRow>;
using MyRow = Indotalent.Recruitment.VacancyRequirementRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyRequirementListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyRequirementListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyRequirementListHandler
    {
        public VacancyRequirementListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}