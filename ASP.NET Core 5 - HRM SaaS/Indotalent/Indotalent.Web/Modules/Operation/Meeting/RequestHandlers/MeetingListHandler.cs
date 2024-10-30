using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.MeetingRow>;
using MyRow = Indotalent.Operation.MeetingRow;

namespace Indotalent.Operation
{
    public interface IMeetingListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingListHandler
    {
        public MeetingListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}