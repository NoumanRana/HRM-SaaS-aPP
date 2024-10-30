using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.PayrollRow>;
using MyRow = Indotalent.Payrolls.PayrollRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollListHandler
    {
        public PayrollListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}