using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeExperienceRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeExperienceDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeExperienceDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeExperienceDeleteHandler
    {
        public EmployeeExperienceDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}