using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.AssetRow>;
using MyRow = Indotalent.Operation.AssetRow;

namespace Indotalent.Operation
{
    public interface IAssetRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AssetRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAssetRetrieveHandler
    {
        public AssetRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}