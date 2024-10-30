using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeTopSkillRow>;
using MyRow = Indotalent.Payrolls.EmployeeTopSkillRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeTopSkillRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeTopSkillRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeTopSkillRetrieveHandler
    {
        public EmployeeTopSkillRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}