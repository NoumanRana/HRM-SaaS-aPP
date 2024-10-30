using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeTopSkillRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeTopSkillRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeTopSkillSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeTopSkillSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeTopSkillSaveHandler
    {
        public EmployeeTopSkillSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}