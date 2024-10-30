using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeDocumentRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeDocumentDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeDocumentDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeDocumentDeleteHandler
    {
        public EmployeeDocumentDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}