using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeOkrResultRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeOkrResultDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeOkrResultDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeOkrResultDeleteHandler
    {
        public EmployeeOkrResultDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}