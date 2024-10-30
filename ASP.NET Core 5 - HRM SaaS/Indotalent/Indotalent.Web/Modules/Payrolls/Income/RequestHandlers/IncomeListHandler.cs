using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.IncomeRow>;
using MyRow = Indotalent.Payrolls.IncomeRow;

namespace Indotalent.Payrolls
{
    public interface IIncomeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class IncomeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IIncomeListHandler
    {
        public IncomeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}