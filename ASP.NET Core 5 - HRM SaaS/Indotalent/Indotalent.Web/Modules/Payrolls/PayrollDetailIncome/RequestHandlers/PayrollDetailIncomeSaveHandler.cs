using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.PayrollDetailIncomeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.PayrollDetailIncomeRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollDetailIncomeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDetailIncomeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDetailIncomeSaveHandler
    {
        public PayrollDetailIncomeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}