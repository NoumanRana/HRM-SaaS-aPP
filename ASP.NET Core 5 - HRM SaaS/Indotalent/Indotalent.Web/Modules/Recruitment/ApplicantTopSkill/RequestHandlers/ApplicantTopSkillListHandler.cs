using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Recruitment.ApplicantTopSkillRow>;
using MyRow = Indotalent.Recruitment.ApplicantTopSkillRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantTopSkillListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantTopSkillListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantTopSkillListHandler
    {
        public ApplicantTopSkillListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}