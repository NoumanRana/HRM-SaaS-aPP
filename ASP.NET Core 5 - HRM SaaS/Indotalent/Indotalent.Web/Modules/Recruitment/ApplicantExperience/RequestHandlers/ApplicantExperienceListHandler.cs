using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Recruitment.ApplicantExperienceRow>;
using MyRow = Indotalent.Recruitment.ApplicantExperienceRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantExperienceListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantExperienceListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantExperienceListHandler
    {
        public ApplicantExperienceListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}