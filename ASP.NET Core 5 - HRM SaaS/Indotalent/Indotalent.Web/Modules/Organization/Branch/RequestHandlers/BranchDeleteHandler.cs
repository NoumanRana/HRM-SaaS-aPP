using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Organization.BranchRow;

namespace Indotalent.Organization
{
    public interface IBranchDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BranchDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBranchDeleteHandler
    {
        public BranchDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}