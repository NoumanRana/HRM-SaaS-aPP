using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Recruitment.ApplicantEducationRow>;
using MyRow = Indotalent.Recruitment.ApplicantEducationRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantEducationListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantEducationListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantEducationListHandler
    {
        public ApplicantEducationListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}