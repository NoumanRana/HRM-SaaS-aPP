using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using System.Linq;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Attendance.PunchInRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Attendance.PunchInRow;

namespace Indotalent.Attendance
{
    public interface IPunchInSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PunchInSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPunchInSaveHandler
    {
        public PunchInSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void BeforeSave()
        {
            base.BeforeSave();

            if (!this.Row.Id.HasValue)
            {
                var connection = UnitOfWork.Connection;
                var query = $"SELECT p.Id, p.EmployeeId, e.Name as EmployeeName FROM Punch p inner join Employee e on p.EmployeeId = e.Id where p.EmployeeId = {Row.EmployeeId.Value} and p.PunchDate = '{Row.PunchDate.Value.ToString("yyyy-MM-dd")}'";
                var existing = connection.Query<PunchInRow>(query, null, commandType: CommandType.Text).FirstOrDefault();
                if (existing != null)
                {
                    throw new Exception($"Selected employee: {existing.EmployeeName}, already [punch in] at this date: {Row.PunchDate.Value.ToShortDateString()}");
                }
            }


            Row.PunchIn = new DateTime(
                Row.PunchDate.Value.Year,
                Row.PunchDate.Value.Month,
                Row.PunchDate.Value.Day,
                Row.InHour.Value,
                Row.InMinute.Value,
                0);
        }
    }
}