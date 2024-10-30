using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeOkrResultRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeOkrResultRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeOkrResultSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeOkrResultSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeOkrResultSaveHandler
    {
        public EmployeeOkrResultSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}