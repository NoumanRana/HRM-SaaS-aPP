using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeOkrObjectiveRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeOkrObjectiveRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeOkrObjectiveSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeOkrObjectiveSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeOkrObjectiveSaveHandler
    {
        public EmployeeOkrObjectiveSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}