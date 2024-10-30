using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeEducationRow>;
using MyRow = Indotalent.Payrolls.EmployeeEducationRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeEducationListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeEducationListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeEducationListHandler
    {
        public EmployeeEducationListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}