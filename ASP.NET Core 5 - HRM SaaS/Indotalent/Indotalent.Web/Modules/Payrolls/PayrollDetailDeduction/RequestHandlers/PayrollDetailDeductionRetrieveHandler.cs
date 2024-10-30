using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.PayrollDetailDeductionRow>;
using MyRow = Indotalent.Payrolls.PayrollDetailDeductionRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollDetailDeductionRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDetailDeductionRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDetailDeductionRetrieveHandler
    {
        public PayrollDetailDeductionRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}