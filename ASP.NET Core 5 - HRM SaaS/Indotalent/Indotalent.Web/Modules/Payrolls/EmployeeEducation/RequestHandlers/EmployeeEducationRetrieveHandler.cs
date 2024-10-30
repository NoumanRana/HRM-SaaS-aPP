using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeEducationRow>;
using MyRow = Indotalent.Payrolls.EmployeeEducationRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeEducationRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeEducationRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeEducationRetrieveHandler
    {
        public EmployeeEducationRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}