using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.AnnouncementRow>;
using MyRow = Indotalent.Operation.AnnouncementRow;

namespace Indotalent.Operation
{
    public interface IAnnouncementListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AnnouncementListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementListHandler
    {
        public AnnouncementListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}