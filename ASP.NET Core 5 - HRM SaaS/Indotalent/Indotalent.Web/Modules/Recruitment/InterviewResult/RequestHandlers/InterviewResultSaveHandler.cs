using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Recruitment.InterviewResultRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Recruitment.InterviewResultRow;

namespace Indotalent.Recruitment
{
    public interface IInterviewResultSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InterviewResultSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInterviewResultSaveHandler
    {
        public InterviewResultSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}