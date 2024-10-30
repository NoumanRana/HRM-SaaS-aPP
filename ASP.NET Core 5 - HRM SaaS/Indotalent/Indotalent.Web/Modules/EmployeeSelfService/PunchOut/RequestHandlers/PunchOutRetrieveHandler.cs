using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.PunchOutRow>;
using MyRow = Indotalent.EmployeeSelfService.PunchOutRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IPunchOutRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PunchOutRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPunchOutRetrieveHandler
    {
        public PunchOutRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}