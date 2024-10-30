using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Attendance.PunchInRow;

namespace Indotalent.Attendance
{
    public interface IPunchInDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PunchInDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPunchInDeleteHandler
    {
        public PunchInDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}