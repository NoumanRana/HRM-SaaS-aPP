using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.LeaveRequestRow>;
using MyRow = Indotalent.EmployeeSelfService.LeaveRequestRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ILeaveRequestListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class LeaveRequestListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveRequestListHandler
    {
        protected IUserRetrieveService UserRetrieveService { get; }
        protected IUserAccessor UserAccessor { get; }
        public LeaveRequestListHandler(IRequestContext context, IUserRetrieveService userRetrieveService, IUserAccessor userAccessor)
             : base(context)
        {
            UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            var userId = -1;
            var employeeId = -1;

            var username = UserAccessor.User?.Identity?.Name;
            if (UserRetrieveService.ByUsername(username) is UserDefinition user)
            {
                userId = user.UserId;

                var employee = Connection.TryFirst<EmployeeRow>(q => q
                     .SelectTableFields()
                     .Where(EmployeeRow.Fields.SystemUserId == userId));

                if (employee != null) employeeId = employee.Id.Value;

                query.Where(LeaveRequestRow.Fields.EmployeeId == employeeId);
            }
        }
    }
}