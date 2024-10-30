using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Attendance.PunchOutRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Attendance.PunchOutRow;

namespace Indotalent.Attendance
{
    public interface IPunchOutSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PunchOutSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPunchOutSaveHandler
    {
        public PunchOutSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void BeforeSave()
        {
            base.BeforeSave();

            Row.PunchOut = new DateTime(
                Row.PunchDate.Value.Year,
                Row.PunchDate.Value.Month,
                Row.PunchDate.Value.Day,
                Row.OutHour.Value,
                Row.OutMinute.Value,
                0);

            TimeSpan ts = Row.PunchOut.Value - Row.PunchIn.Value;
            Row.Duration = ts.TotalMinutes;

        }
    }
}