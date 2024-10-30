using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.EmployeeSelfService.AnnouncementRow>;
using MyRow = Indotalent.EmployeeSelfService.AnnouncementRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IAnnouncementRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AnnouncementRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementRetrieveHandler
    {
        public AnnouncementRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}