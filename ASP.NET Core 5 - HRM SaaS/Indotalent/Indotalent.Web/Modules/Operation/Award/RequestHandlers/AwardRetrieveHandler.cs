using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.AwardRow>;
using MyRow = Indotalent.Operation.AwardRow;

namespace Indotalent.Operation
{
    public interface IAwardRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AwardRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAwardRetrieveHandler
    {
        public AwardRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}