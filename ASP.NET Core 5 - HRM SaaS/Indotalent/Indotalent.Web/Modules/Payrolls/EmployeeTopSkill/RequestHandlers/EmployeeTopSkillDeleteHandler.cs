using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeTopSkillRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeTopSkillDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeTopSkillDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeTopSkillDeleteHandler
    {
        public EmployeeTopSkillDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}