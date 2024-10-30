using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.ResignationRow>;
using MyRow = Indotalent.Operation.ResignationRow;

namespace Indotalent.Operation
{
    public interface IResignationRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ResignationRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IResignationRetrieveHandler
    {
        public ResignationRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}