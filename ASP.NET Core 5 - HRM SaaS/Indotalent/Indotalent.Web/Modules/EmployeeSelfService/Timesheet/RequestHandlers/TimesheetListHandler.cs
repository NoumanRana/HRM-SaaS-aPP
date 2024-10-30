using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.TimesheetRow>;
using MyRow = Indotalent.EmployeeSelfService.TimesheetRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ITimesheetListHandler : IListHandler<MyRow, MyRequest, MyResponse> 
    {
        ListResponse<MyRow> ListReport(IDbConnection connection, ListRequest request);
    }

    public class TimesheetListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITimesheetListHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }

        public TimesheetListHandler(IRequestContext context, IUserAccessor userAccessor, IUserRetrieveService userRetriever)
             : base(context)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }

        public ListResponse<MyRow> ListReport(IDbConnection connection, ListRequest request)
        {
            var userId = -1;
            var employeeId = -1;
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            if (user != null) userId = user.UserId;
            var employee = connection.TryFirst<EmployeeRow>(q => q
                 .SelectTableFields()
                 .Where(EmployeeRow.Fields.SystemUserId == userId));
            if (employee != null) employeeId = employee.Id.Value;

            var result = connection.Query<TimesheetRow>(
                @$"

;with summary as
(
select e.EmployeeNumber as EmployeeNumber, e.Name as EmployeeName, p.PunchDate as Date, p.PunchIn, p.PunchOut, p.Duration as WorkingDuration, 0 as OvertimeDuration 
from Punch p
inner join Employee e on p.EmployeeId = e.Id
where e.Id = {employeeId}

union all

select e.EmployeeNumber as EmployeeNumber, e.Name as EmployeeName, o.OvertimeDate as Date, null as PunchIn, null as PunchOut, 0 as WorkingDuration, o.Duration as OvertimeDuration
from Overtime o
inner join Employee e on o.EmployeeId = e.Id
where o.OvertimeStatus = 2 and e.Id = {employeeId}
)
select ROW_NUMBER() OVER(ORDER BY (select Date) DESC) as Id, EmployeeNumber, MAX(EmployeeName) as EmployeeName, Date as CalendarDate, MAX(PunchIn) as PunchIn, MAX(PunchOut) as PunchOut, SUM(WorkingDuration) as WorkingDuration, SUM(OvertimeDuration) as OvertimeDuration  
from summary
where EmployeeNumber like '%{request.ContainsText}%' or EmployeeName like '%{request.ContainsText}%'
group by EmployeeNumber, Date

                ",
                null,
                commandType: CommandType.Text
                ).ToList();

            var totalCount = result.Count();
            var skip = request.Skip;
            var take = request.Skip == 0 && request.Take == 0 ? totalCount : request.Take;
            var pagedResult = result.Skip(skip).Take(take).ToList();
            return new ListResponse<MyRow>()
            {
                Entities = pagedResult,
                Skip = skip,
                Take = take,
                TotalCount = totalCount
            };
        }

    }
}