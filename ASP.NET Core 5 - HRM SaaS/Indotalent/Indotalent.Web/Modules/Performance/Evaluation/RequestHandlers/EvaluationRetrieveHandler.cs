using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Performance.EvaluationRow>;
using MyRow = Indotalent.Performance.EvaluationRow;

namespace Indotalent.Performance
{
    public interface IEvaluationRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EvaluationRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEvaluationRetrieveHandler
    {
        public EvaluationRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}