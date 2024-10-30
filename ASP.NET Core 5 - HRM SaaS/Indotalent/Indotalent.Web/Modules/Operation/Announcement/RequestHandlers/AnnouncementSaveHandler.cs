using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.AnnouncementRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.AnnouncementRow;

namespace Indotalent.Operation
{
    public interface IAnnouncementSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AnnouncementSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAnnouncementSaveHandler
    {
        public AnnouncementSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}