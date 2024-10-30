using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeOkrResultRow>;
using MyRow = Indotalent.Payrolls.EmployeeOkrResultRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeOkrResultListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeOkrResultListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeOkrResultListHandler
    {
        public EmployeeOkrResultListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}