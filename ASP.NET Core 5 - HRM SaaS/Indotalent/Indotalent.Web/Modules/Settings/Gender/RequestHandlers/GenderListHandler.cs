using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Settings.GenderRow>;
using MyRow = Indotalent.Settings.GenderRow;

namespace Indotalent.Settings
{
    public interface IGenderListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class GenderListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGenderListHandler
    {
        public GenderListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}