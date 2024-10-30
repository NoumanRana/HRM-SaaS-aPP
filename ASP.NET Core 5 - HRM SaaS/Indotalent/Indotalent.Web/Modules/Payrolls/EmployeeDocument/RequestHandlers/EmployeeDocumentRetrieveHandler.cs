using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeDocumentRow>;
using MyRow = Indotalent.Payrolls.EmployeeDocumentRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeDocumentRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeDocumentRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeDocumentRetrieveHandler
    {
        public EmployeeDocumentRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}