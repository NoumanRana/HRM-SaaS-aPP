using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeDeductionRow>;
using MyRow = Indotalent.Payrolls.EmployeeDeductionRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeDeductionRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeDeductionRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeDeductionRetrieveHandler
    {
        public EmployeeDeductionRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}