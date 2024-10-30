using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Organization.BranchRow>;
using MyRow = Indotalent.Organization.BranchRow;

namespace Indotalent.Organization
{
    public interface IBranchRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BranchRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBranchRetrieveHandler
    {
        public BranchRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}