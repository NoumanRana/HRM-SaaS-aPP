using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.PayrollDetailIncomeRow>;
using MyRow = Indotalent.Payrolls.PayrollDetailIncomeRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollDetailIncomeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDetailIncomeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDetailIncomeListHandler
    {
        public PayrollDetailIncomeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}