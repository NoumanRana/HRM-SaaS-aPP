using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.PayrollDetailRow>;
using MyRow = Indotalent.Payrolls.PayrollDetailRow;

namespace Indotalent.Payrolls
{
    public interface IPayrollDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDetailRetrieveHandler
    {
        public PayrollDetailRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}