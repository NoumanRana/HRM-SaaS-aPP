using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeEducationRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeEducationRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeEducationSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeEducationSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeEducationSaveHandler
    {
        public EmployeeEducationSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}