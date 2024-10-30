using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Recruitment.ApplicantEducationRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantEducationDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantEducationDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantEducationDeleteHandler
    {
        public ApplicantEducationDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}