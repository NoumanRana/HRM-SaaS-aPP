using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Recruitment.ApplicantEducationRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Recruitment.ApplicantEducationRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantEducationSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantEducationSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantEducationSaveHandler
    {
        public ApplicantEducationSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}