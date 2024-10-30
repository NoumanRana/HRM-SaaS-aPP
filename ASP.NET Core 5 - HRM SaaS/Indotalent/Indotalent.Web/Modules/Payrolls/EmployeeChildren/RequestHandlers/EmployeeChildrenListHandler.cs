using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeChildrenRow>;
using MyRow = Indotalent.Payrolls.EmployeeChildrenRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeChildrenListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeChildrenListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeChildrenListHandler
    {
        public EmployeeChildrenListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}