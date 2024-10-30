using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.EmployeeSelfService.AwardRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.EmployeeSelfService.AwardRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IAwardSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AwardSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAwardSaveHandler
    {
        public AwardSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}