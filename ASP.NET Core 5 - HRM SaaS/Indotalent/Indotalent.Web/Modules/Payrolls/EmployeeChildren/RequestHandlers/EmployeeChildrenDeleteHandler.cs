using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeChildrenRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeChildrenDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeChildrenDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeChildrenDeleteHandler
    {
        public EmployeeChildrenDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}