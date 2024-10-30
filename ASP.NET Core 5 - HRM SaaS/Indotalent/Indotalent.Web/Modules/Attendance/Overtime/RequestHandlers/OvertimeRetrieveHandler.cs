using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Attendance.OvertimeRow>;
using MyRow = Indotalent.Attendance.OvertimeRow;

namespace Indotalent.Attendance
{
    public interface IOvertimeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class OvertimeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOvertimeRetrieveHandler
    {
        public OvertimeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}