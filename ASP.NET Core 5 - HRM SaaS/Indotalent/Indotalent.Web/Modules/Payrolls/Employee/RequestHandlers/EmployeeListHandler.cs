using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeRow>;
using MyRow = Indotalent.Payrolls.EmployeeRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeListHandler
    {
        public EmployeeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}