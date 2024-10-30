using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.WarningRow>;
using MyRow = Indotalent.Operation.WarningRow;

namespace Indotalent.Operation
{
    public interface IWarningListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class WarningListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IWarningListHandler
    {
        public WarningListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}