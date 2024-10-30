using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.SOPRow>;
using MyRow = Indotalent.Operation.SOPRow;

namespace Indotalent.Operation
{
    public interface ISOPListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SOPListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISOPListHandler
    {
        public SOPListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}