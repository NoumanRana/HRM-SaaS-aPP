using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.AssetHandOverRow;

namespace Indotalent.Operation
{
    public interface IAssetHandOverDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AssetHandOverDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAssetHandOverDeleteHandler
    {
        public AssetHandOverDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}