using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeKpiRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeKpiDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeKpiDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeKpiDeleteHandler
    {
        public EmployeeKpiDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}