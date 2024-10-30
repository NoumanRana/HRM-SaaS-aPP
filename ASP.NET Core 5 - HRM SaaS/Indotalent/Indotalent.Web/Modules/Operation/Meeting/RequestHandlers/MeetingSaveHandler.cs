using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.MeetingRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.MeetingRow;

namespace Indotalent.Operation
{
    public interface IMeetingSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingSaveHandler
    {
        public MeetingSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}