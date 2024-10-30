using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.TerminationRow>;
using MyRow = Indotalent.Operation.TerminationRow;

namespace Indotalent.Operation
{
    public interface ITerminationListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TerminationListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITerminationListHandler
    {
        public TerminationListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}