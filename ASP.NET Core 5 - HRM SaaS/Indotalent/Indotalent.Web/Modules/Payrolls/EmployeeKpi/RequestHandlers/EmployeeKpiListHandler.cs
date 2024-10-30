using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeKpiRow>;
using MyRow = Indotalent.Payrolls.EmployeeKpiRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeKpiListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeKpiListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeKpiListHandler
    {
        public EmployeeKpiListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}