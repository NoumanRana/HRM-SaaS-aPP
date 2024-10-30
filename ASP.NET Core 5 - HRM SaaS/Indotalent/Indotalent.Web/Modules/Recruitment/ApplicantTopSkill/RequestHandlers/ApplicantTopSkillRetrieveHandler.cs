using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Recruitment.ApplicantTopSkillRow>;
using MyRow = Indotalent.Recruitment.ApplicantTopSkillRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantTopSkillRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantTopSkillRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantTopSkillRetrieveHandler
    {
        public ApplicantTopSkillRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}