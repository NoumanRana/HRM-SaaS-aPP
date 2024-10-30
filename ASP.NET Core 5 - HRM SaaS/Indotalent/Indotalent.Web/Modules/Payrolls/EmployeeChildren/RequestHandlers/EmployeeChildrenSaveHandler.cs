using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeChildrenRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeChildrenRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeChildrenSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeChildrenSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeChildrenSaveHandler
    {
        public EmployeeChildrenSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}