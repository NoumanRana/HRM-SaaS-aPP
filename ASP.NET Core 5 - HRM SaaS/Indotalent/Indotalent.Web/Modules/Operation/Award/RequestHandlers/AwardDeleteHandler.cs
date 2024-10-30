using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.AwardRow;

namespace Indotalent.Operation
{
    public interface IAwardDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AwardDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAwardDeleteHandler
    {
        public AwardDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}