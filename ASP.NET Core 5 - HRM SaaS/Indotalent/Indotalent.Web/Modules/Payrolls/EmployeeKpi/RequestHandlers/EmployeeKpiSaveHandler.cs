using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeKpiRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeKpiRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeKpiSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeKpiSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeKpiSaveHandler
    {
        public EmployeeKpiSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}