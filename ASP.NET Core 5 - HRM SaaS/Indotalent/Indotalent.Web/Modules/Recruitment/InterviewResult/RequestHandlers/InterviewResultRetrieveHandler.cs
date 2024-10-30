using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Recruitment.InterviewResultRow>;
using MyRow = Indotalent.Recruitment.InterviewResultRow;

namespace Indotalent.Recruitment
{
    public interface IInterviewResultRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InterviewResultRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInterviewResultRetrieveHandler
    {
        public InterviewResultRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}