using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Recruitment.VacancyRow;

namespace Indotalent.Recruitment
{
    public interface IVacancyDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VacancyDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVacancyDeleteHandler
    {
        public VacancyDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}