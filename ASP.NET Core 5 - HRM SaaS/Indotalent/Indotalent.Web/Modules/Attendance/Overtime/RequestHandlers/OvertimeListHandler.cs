using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Attendance.OvertimeRow>;
using MyRow = Indotalent.Attendance.OvertimeRow;

namespace Indotalent.Attendance
{
    public interface IOvertimeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class OvertimeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IOvertimeListHandler
    {
        public OvertimeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}