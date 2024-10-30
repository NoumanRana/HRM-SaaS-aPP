using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.AssetRow;

namespace Indotalent.Operation
{
    public interface IAssetDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AssetDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAssetDeleteHandler
    {
        public AssetDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}