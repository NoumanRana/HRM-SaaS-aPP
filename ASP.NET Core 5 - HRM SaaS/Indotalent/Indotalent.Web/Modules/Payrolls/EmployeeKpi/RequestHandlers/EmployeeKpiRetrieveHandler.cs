using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeKpiRow>;
using MyRow = Indotalent.Payrolls.EmployeeKpiRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeKpiRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeKpiRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeKpiRetrieveHandler
    {
        public EmployeeKpiRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}