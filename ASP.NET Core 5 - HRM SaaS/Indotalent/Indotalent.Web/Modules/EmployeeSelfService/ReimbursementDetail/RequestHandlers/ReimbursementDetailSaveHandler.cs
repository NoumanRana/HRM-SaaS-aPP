using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.EmployeeSelfService.ReimbursementDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.EmployeeSelfService.ReimbursementDetailRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IReimbursementDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReimbursementDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IReimbursementDetailSaveHandler
    {
        public ReimbursementDetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}