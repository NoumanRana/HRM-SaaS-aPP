using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.ResignationRow>;
using MyRow = Indotalent.Operation.ResignationRow;

namespace Indotalent.Operation
{
    public interface IResignationListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ResignationListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IResignationListHandler
    {
        public ResignationListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}