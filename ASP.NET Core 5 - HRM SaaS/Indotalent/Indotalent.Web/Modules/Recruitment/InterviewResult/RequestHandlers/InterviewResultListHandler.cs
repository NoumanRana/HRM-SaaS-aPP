using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Recruitment.InterviewResultRow>;
using MyRow = Indotalent.Recruitment.InterviewResultRow;

namespace Indotalent.Recruitment
{
    public interface IInterviewResultListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InterviewResultListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInterviewResultListHandler
    {
        public InterviewResultListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}