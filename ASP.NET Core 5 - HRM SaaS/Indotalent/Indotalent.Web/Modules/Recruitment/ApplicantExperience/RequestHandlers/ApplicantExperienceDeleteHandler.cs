using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Recruitment.ApplicantExperienceRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantExperienceDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantExperienceDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantExperienceDeleteHandler
    {
        public ApplicantExperienceDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}