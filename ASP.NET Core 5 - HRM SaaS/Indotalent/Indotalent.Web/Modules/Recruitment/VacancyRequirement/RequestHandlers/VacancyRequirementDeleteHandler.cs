using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Recruitment.VacancyRequirementRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyRequirementDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyRequirementDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyRequirementDeleteHandler
    {
        public VacancyRequirementDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}