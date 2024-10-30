using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Recruitment.VacancyRow>;
using MyRow = Indotalent.Recruitment.VacancyRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyListHandler
    {
        public VacancyListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}