using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using System.Linq;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.EmployeeSelfService.LeaveRequestRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.EmployeeSelfService.LeaveRequestRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ILeaveRequestSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveRequestSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveRequestSaveHandler
    {
        public LeaveRequestSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void BeforeSave()
        {
            base.BeforeSave();

            if (Row.ToDate < Row.FromDate)
            {
                throw new Exception($"To Date [{Row.ToDate.Value.ToShortDateString()}] should bigger than From Date [{Row.FromDate.Value.ToShortDateString()}]");
            }

            if (this.IsCreate)
            {
                if (Row.Number.ToLower().Equals("auto"))
                {
                    var tenant = UnitOfWork.Connection.ById<TenantRow>(Row.TenantId);
                    var request = new GetNextNumberRequest()
                    {
                        Prefix = tenant.LeaveRequestNumberUseDate.Value ? tenant.LeaveRequestNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.LeaveRequestNumberPrefix,
                        Length = tenant.LeaveRequestNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                }

            }

            var duration = 0;
            for (var day = Row.FromDate.Value; day <= Row.ToDate.Value; day = day.AddDays(1))
            {
                if (day.DayOfWeek != DayOfWeek.Saturday && day.DayOfWeek != DayOfWeek.Sunday)
                {
                    duration += 1;
                }
            }
            Row.Duration = duration;
        }

        protected override void AfterSave()
        {
            base.AfterSave();

            RecalculateLeaveTaken();
        }

        private void RecalculateLeaveTaken()
        {
            var connection = UnitOfWork.Connection;
            var leaves = connection.Query<LeaveRequestRow>(
                @$"

select * from LeaveRequest where 
EmployeeId = {Row.EmployeeId} and 
YEAR(FromDate) = {Row.FromDate.Value.Year} and 
LeaveRequestStatus = {(Int32)LeaveRequestStatus.Approve}

                ",
                null,
                commandType: CommandType.Text
                ).ToList();

            var employee = connection.TryById<Payrolls.EmployeeRow>(Row.EmployeeId, x => x.SelectTableFields());
            employee.LeaveTaken = leaves.Sum(x => x.Duration.Value);
            connection.UpdateById<Payrolls.EmployeeRow>(employee);
        }
    }
}