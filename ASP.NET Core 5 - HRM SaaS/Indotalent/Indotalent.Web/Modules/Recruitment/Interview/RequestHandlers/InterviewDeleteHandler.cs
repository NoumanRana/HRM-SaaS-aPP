using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Recruitment.InterviewRow;

namespace Indotalent.Recruitment
{
    public interface IInterviewDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InterviewDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInterviewDeleteHandler
    {
        public InterviewDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}