using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Recruitment.ApplicantRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantDeleteHandler
    {
        public ApplicantDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}