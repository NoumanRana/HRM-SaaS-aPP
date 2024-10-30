using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeIncomeRow>;
using MyRow = Indotalent.Payrolls.EmployeeIncomeRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeIncomeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeIncomeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeIncomeRetrieveHandler
    {
        public EmployeeIncomeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}