using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.OvertimeRow>;
using MyRow = Indotalent.EmployeeSelfService.OvertimeRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IOvertimeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class OvertimeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOvertimeRetrieveHandler
    {
        public OvertimeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}