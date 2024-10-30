using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Recruitment.ApplicantEducationRow>;
using MyRow = Indotalent.Recruitment.ApplicantEducationRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantEducationRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantEducationRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantEducationRetrieveHandler
    {
        public ApplicantEducationRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}