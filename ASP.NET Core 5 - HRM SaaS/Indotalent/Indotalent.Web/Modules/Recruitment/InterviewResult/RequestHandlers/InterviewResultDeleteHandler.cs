using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Recruitment.InterviewResultRow;

namespace Indotalent.Recruitment
{
    public interface IInterviewResultDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InterviewResultDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInterviewResultDeleteHandler
    {
        public InterviewResultDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}