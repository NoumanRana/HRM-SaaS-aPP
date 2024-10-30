using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeDeductionRow>;
using MyRow = Indotalent.Payrolls.EmployeeDeductionRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeDeductionListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeDeductionListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeDeductionListHandler
    {
        public EmployeeDeductionListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}