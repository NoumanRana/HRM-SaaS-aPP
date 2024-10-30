using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.MeetingRow>;
using MyRow = Indotalent.Operation.MeetingRow;

namespace Indotalent.Operation
{
    public interface IMeetingRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingRetrieveHandler
    {
        public MeetingRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}