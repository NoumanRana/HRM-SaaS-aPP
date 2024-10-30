using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.TerminationRow>;
using MyRow = Indotalent.Operation.TerminationRow;

namespace Indotalent.Operation
{
    public interface ITerminationRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TerminationRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITerminationRetrieveHandler
    {
        public TerminationRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}