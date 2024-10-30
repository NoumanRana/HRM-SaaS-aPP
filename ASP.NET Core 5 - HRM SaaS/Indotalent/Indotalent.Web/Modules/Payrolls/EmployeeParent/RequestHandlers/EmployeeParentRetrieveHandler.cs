using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeParentRow>;
using MyRow = Indotalent.Payrolls.EmployeeParentRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeParentRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeParentRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeParentRetrieveHandler
    {
        public EmployeeParentRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}