using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeIncomeRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeIncomeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeIncomeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeIncomeDeleteHandler
    {
        public EmployeeIncomeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}