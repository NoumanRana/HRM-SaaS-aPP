using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Attendance.OvertimeRow;

namespace Indotalent.Attendance
{
    public interface IOvertimeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class OvertimeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IOvertimeDeleteHandler
    {
        public OvertimeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}