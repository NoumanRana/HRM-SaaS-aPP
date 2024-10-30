using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Attendance.PunchOutRow>;
using MyRow = Indotalent.Attendance.PunchOutRow;

namespace Indotalent.Attendance
{
    public interface IPunchOutListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PunchOutListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPunchOutListHandler
    {
        public PunchOutListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}