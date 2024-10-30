using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.SOPRow;

namespace Indotalent.Operation
{
    public interface ISOPDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SOPDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISOPDeleteHandler
    {
        public SOPDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}