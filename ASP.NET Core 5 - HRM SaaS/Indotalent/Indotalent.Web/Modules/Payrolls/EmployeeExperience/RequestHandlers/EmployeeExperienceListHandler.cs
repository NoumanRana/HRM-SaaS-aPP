using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeExperienceRow>;
using MyRow = Indotalent.Payrolls.EmployeeExperienceRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeExperienceListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeExperienceListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeExperienceListHandler
    {
        public EmployeeExperienceListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}