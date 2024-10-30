using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Recruitment.ApplicantRow>;
using MyRow = Indotalent.Recruitment.ApplicantRow;

namespace Indotalent.Recruitment
{
    public interface IApplicantListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ApplicantListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IApplicantListHandler
    {
        public ApplicantListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}