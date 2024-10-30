using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Organization.BranchRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Organization.BranchRow;

namespace Indotalent.Organization
{
    public interface IBranchSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BranchSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBranchSaveHandler
    {
        public BranchSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}