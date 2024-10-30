using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Organization.BranchRow>;
using MyRow = Indotalent.Organization.BranchRow;

namespace Indotalent.Organization
{
    public interface IBranchListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BranchListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBranchListHandler
    {
        public BranchListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}