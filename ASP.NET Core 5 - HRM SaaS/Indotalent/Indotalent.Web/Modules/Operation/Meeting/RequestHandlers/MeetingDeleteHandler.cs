using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.MeetingRow;

namespace Indotalent.Operation
{
    public interface IMeetingDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingDeleteHandler
    {
        public MeetingDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}