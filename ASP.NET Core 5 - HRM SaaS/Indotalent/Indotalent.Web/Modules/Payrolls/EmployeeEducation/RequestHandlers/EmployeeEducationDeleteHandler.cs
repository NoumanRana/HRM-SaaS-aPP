using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeEducationRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeEducationDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeEducationDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeEducationDeleteHandler
    {
        public EmployeeEducationDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}