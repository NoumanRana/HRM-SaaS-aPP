using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.WarningRow;

namespace Indotalent.Operation
{
    public interface IWarningDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class WarningDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IWarningDeleteHandler
    {
        public WarningDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}