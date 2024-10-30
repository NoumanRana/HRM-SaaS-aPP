using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.ResignationRow;

namespace Indotalent.Operation
{
    public interface IResignationDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ResignationDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IResignationDeleteHandler
    {
        public ResignationDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}