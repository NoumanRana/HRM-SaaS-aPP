using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.LeaveEmergencyContactRow>;
using MyRow = Indotalent.EmployeeSelfService.LeaveEmergencyContactRow;

namespace Indotalent.EmployeeSelfService
{
    public interface ILeaveEmergencyContactListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class LeaveEmergencyContactListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILeaveEmergencyContactListHandler
    {
        public LeaveEmergencyContactListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}