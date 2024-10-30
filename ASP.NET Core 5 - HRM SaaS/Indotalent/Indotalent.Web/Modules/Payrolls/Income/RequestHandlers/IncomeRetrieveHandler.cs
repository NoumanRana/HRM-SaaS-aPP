using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.IncomeRow>;
using MyRow = Indotalent.Payrolls.IncomeRow;

namespace Indotalent.Payrolls
{
    public interface IIncomeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class IncomeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IIncomeRetrieveHandler
    {
        public IncomeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}