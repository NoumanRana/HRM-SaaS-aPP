using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Recruitment.ApplicantTopSkillRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Recruitment.ApplicantTopSkillRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantTopSkillSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantTopSkillSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantTopSkillSaveHandler
    {
        public ApplicantTopSkillSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}