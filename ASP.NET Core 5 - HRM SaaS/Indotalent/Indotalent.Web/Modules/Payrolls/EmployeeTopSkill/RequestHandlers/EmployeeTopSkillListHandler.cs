using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeTopSkillRow>;
using MyRow = Indotalent.Payrolls.EmployeeTopSkillRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeTopSkillListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeTopSkillListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeTopSkillListHandler
    {
        public EmployeeTopSkillListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}