using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeParentRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeParentRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeParentSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeParentSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeParentSaveHandler
    {
        public EmployeeParentSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}