using Indotalent.Payrolls;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.EmployeeSelfService.MeetingRow>;
using MyRow = Indotalent.EmployeeSelfService.MeetingRow;

namespace Indotalent.EmployeeSelfService
{
    public interface IMeetingListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class MeetingListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingListHandler
    {
        public MeetingListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}