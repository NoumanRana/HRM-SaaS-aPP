using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeDeductionRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeDeductionRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeDeductionSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeDeductionSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeDeductionSaveHandler
    {
        public EmployeeDeductionSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}