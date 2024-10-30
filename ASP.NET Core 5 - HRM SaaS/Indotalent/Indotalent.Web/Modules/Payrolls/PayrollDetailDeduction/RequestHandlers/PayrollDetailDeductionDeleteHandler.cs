using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.PayrollDetailDeductionRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollDetailDeductionDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDetailDeductionDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDetailDeductionDeleteHandler
    {
        public PayrollDetailDeductionDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}