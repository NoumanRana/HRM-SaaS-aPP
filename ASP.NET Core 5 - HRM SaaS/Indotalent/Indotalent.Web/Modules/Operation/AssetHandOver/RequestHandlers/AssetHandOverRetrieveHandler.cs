using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.AssetHandOverRow>;
using MyRow = Indotalent.Operation.AssetHandOverRow;

namespace Indotalent.Operation
{
    public interface IAssetHandOverRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AssetHandOverRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAssetHandOverRetrieveHandler
    {
        public AssetHandOverRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}