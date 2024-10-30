using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeDocumentRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeDocumentRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeDocumentSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeDocumentSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeDocumentSaveHandler
    {
        public EmployeeDocumentSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}