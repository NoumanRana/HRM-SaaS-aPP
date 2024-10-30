using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeIncomeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeIncomeRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeIncomeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeIncomeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeIncomeSaveHandler
    {
        public EmployeeIncomeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}