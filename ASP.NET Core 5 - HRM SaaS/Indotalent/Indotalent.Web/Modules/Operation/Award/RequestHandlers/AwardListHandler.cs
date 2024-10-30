using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.AwardRow>;
using MyRow = Indotalent.Operation.AwardRow;

namespace Indotalent.Operation
{
    public interface IAwardListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AwardListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAwardListHandler
    {
        public AwardListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}