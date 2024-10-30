using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeExperienceRow>;
using MyRow = Indotalent.Payrolls.EmployeeExperienceRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeExperienceRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeExperienceRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeExperienceRetrieveHandler
    {
        public EmployeeExperienceRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}