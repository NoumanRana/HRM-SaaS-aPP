using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Recruitment.ApplicantRow>;
using MyRow = Indotalent.Recruitment.ApplicantRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantRetrieveHandler
    {
        public ApplicantRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}