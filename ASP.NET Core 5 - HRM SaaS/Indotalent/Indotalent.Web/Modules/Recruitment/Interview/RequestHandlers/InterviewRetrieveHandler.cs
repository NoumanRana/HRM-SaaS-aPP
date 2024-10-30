using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Recruitment.InterviewRow>;
using MyRow = Indotalent.Recruitment.InterviewRow;

namespace Indotalent.Recruitment
{
    public interface IInterviewRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InterviewRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInterviewRetrieveHandler
    {
        public InterviewRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}