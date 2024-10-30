using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Attendance.PunchOutRow;

namespace Indotalent.Attendance
{
    public interface IPunchOutDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PunchOutDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPunchOutDeleteHandler
    {
        public PunchOutDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}