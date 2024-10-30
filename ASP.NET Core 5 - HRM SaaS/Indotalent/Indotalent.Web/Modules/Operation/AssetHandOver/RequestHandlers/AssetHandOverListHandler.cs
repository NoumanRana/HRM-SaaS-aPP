using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.AssetHandOverRow>;
using MyRow = Indotalent.Operation.AssetHandOverRow;

namespace Indotalent.Operation
{
    public interface IAssetHandOverListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AssetHandOverListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAssetHandOverListHandler
    {
        public AssetHandOverListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}