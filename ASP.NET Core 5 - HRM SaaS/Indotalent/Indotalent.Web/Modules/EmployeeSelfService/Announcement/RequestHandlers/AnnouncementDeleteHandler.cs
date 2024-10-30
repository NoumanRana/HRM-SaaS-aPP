using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.EmployeeSelfService.AnnouncementRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IAnnouncementDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AnnouncementDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementDeleteHandler
    {
        public AnnouncementDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}