using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Recruitment.VacancyRequirementRow>;
using MyRow = Indotalent.Recruitment.VacancyRequirementRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyRequirementRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyRequirementRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyRequirementRetrieveHandler
    {
        public VacancyRequirementRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}