using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.ComplaintRow>;
using MyRow = Indotalent.Operation.ComplaintRow;

namespace Indotalent.Operation
{
    public interface IComplaintListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ComplaintListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IComplaintListHandler
    {
        public ComplaintListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}