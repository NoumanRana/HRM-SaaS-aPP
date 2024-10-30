using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Attendance.PunchOutRow>;
using MyRow = Indotalent.Attendance.PunchOutRow;

namespace Indotalent.Attendance
{
    public interface IPunchOutRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PunchOutRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPunchOutRetrieveHandler
    {
        public PunchOutRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}