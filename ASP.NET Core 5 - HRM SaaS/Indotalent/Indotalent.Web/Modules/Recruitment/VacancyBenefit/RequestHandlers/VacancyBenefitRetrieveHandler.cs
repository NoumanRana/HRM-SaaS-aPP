using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Recruitment.VacancyBenefitRow>;
using MyRow = Indotalent.Recruitment.VacancyBenefitRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyBenefitRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyBenefitRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyBenefitRetrieveHandler
    {
        public VacancyBenefitRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}