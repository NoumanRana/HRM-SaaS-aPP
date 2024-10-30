using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.IncomeRow;

namespace Indotalent.Payrolls
{
    public interface IIncomeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class IncomeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IIncomeDeleteHandler
    {
        public IncomeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}