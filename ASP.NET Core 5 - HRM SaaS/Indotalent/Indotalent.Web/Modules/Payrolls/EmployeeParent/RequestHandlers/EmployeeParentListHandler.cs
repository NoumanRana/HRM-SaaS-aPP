using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeParentRow>;
using MyRow = Indotalent.Payrolls.EmployeeParentRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeParentListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeParentListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeParentListHandler
    {
        public EmployeeParentListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}