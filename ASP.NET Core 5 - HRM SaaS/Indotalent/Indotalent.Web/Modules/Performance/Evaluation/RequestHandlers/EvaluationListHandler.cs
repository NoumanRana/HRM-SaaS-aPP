using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Performance.EvaluationRow>;
using MyRow = Indotalent.Performance.EvaluationRow;

namespace Indotalent.Performance
{
    public interface IEvaluationListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EvaluationListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEvaluationListHandler
    {
        public EvaluationListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}