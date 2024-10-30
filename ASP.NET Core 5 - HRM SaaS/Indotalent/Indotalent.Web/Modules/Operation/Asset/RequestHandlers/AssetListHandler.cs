using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.AssetRow>;
using MyRow = Indotalent.Operation.AssetRow;

namespace Indotalent.Operation
{
    public interface IAssetListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AssetListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAssetListHandler
    {
        public AssetListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}