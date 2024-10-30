using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Recruitment.ApplicantTopSkillRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantTopSkillDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantTopSkillDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantTopSkillDeleteHandler
    {
        public ApplicantTopSkillDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}