using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeExperienceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeExperienceRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeExperienceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeExperienceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeExperienceSaveHandler
    {
        public EmployeeExperienceSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}