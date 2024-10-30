using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeDeductionRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeDeductionDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeDeductionDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeDeductionDeleteHandler
    {
        public EmployeeDeductionDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}