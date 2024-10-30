using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.TerminationRow;

namespace Indotalent.Operation
{
    public interface ITerminationDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TerminationDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITerminationDeleteHandler
    {
        public TerminationDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}