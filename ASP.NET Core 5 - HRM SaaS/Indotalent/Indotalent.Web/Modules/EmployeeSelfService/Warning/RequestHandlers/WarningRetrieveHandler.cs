using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.WarningRow>;
using MyRow = Indotalent.EmployeeSelfService.WarningRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IWarningRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class WarningRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IWarningRetrieveHandler
    {
        public WarningRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}