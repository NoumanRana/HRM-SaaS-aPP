using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using System.Linq;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.EmployeeSelfService.OvertimeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.EmployeeSelfService.OvertimeRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IOvertimeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class OvertimeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOvertimeSaveHandler
    {
        public OvertimeSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void BeforeSave()
        {
            base.BeforeSave();

            if (!this.Row.Id.HasValue)
            {
                var connection = UnitOfWork.Connection;
                var query = $"SELECT p.Id, p.EmployeeId, e.Name as EmployeeName FROM Overtime p inner join Employee e on p.EmployeeId = e.Id where p.EmployeeId = {Row.EmployeeId.Value} and p.OvertimeDate = '{Row.OvertimeDate.Value.ToString("yyyy-MM-dd")}'";
                var existing = connection.Query<OvertimeRow>(query, null, commandType: CommandType.Text).FirstOrDefault();
                if (existing != null)
                {
                    throw new Exception($"Selected employee: {existing.EmployeeName}, already submit [overtime] at this date: {Row.OvertimeDate.Value.ToShortDateString()}");
                }
            }

        }
    }
}