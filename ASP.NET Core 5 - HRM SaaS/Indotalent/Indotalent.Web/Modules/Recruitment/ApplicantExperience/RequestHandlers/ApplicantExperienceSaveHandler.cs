using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Recruitment.ApplicantExperienceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Recruitment.ApplicantExperienceRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantExperienceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantExperienceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantExperienceSaveHandler
    {
        public ApplicantExperienceSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}