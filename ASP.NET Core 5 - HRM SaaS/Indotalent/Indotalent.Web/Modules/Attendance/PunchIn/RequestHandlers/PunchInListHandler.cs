using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Attendance.PunchInRow>;
using MyRow = Indotalent.Attendance.PunchInRow;

namespace Indotalent.Attendance
{
    public interface IPunchInListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PunchInListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPunchInListHandler
    {
        public PunchInListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}