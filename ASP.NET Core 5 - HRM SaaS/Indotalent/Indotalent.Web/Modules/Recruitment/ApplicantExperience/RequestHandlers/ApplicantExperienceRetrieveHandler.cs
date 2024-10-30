using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Recruitment.ApplicantExperienceRow>;
using MyRow = Indotalent.Recruitment.ApplicantExperienceRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantExperienceRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantExperienceRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantExperienceRetrieveHandler
    {
        public ApplicantExperienceRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}