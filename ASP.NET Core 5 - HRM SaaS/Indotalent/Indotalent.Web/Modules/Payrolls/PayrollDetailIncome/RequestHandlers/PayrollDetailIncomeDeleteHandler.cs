using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.PayrollDetailIncomeRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollDetailIncomeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDetailIncomeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDetailIncomeDeleteHandler
    {
        public PayrollDetailIncomeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}