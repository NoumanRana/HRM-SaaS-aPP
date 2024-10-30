using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.PayrollDetailRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDetailDeleteHandler
    {
        public PayrollDetailDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}