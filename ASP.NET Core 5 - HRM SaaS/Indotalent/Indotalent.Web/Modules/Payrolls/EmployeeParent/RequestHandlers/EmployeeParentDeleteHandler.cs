using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeParentRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeParentDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeParentDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeParentDeleteHandler
    {
        public EmployeeParentDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}