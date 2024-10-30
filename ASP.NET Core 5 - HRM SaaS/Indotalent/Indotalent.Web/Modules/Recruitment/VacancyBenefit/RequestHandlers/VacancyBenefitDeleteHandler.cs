using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Recruitment.VacancyBenefitRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyBenefitDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyBenefitDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyBenefitDeleteHandler
    {
        public VacancyBenefitDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}