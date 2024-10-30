using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Recruitment.InterviewRow>;
using MyRow = Indotalent.Recruitment.InterviewRow;

namespace Indotalent.Recruitment
{
    public interface IInterviewListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InterviewListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInterviewListHandler
    {
        public InterviewListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}