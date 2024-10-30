using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.AwardRow>;
using MyRow = Indotalent.EmployeeSelfService.AwardRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IAwardRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AwardRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAwardRetrieveHandler
    {
        public AwardRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}