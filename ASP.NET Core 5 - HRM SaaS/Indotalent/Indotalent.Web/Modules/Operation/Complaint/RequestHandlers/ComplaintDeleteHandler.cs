using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.ComplaintRow;

namespace Indotalent.Operation
{
    public interface IComplaintDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ComplaintDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IComplaintDeleteHandler
    {
        public ComplaintDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}