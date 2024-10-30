using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.PayrollDetailDeductionRow>;
using MyRow = Indotalent.Payrolls.PayrollDetailDeductionRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollDetailDeductionListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDetailDeductionListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDetailDeductionListHandler
    {
        public PayrollDetailDeductionListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}