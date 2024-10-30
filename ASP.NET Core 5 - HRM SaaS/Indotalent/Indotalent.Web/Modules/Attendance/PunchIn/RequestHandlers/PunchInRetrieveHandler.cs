using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Attendance.PunchInRow>;
using MyRow = Indotalent.Attendance.PunchInRow;

namespace Indotalent.Attendance
{
    public interface IPunchInRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PunchInRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPunchInRetrieveHandler
    {
        public PunchInRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}