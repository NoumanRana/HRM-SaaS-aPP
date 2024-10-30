using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Recruitment.VacancyRow>;
using MyRow = Indotalent.Recruitment.VacancyRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyRetrieveHandler
    {
        public VacancyRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}