using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeIncomeRow>;
using MyRow = Indotalent.Payrolls.EmployeeIncomeRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeIncomeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeIncomeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeIncomeListHandler
    {
        public EmployeeIncomeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}