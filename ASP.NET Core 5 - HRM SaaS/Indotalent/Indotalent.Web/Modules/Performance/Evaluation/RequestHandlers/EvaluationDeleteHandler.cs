using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Performance.EvaluationRow;

namespace Indotalent.Performance
{
    public interface IEvaluationDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EvaluationDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEvaluationDeleteHandler
    {
        public EvaluationDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}