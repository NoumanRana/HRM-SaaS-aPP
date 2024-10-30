using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeDocumentRow>;
using MyRow = Indotalent.Payrolls.EmployeeDocumentRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeDocumentListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeDocumentListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeDocumentListHandler
    {
        public EmployeeDocumentListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}