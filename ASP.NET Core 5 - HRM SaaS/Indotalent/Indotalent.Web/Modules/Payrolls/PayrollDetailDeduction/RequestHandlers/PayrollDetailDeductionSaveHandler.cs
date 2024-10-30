using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.PayrollDetailDeductionRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.PayrollDetailDeductionRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollDetailDeductionSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDetailDeductionSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDetailDeductionSaveHandler
    {
        public PayrollDetailDeductionSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}