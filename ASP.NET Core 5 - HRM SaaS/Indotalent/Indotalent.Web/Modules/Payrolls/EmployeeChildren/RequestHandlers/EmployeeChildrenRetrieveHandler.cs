using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeChildrenRow>;
using MyRow = Indotalent.Payrolls.EmployeeChildrenRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeChildrenRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeChildrenRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeChildrenRetrieveHandler
    {
        public EmployeeChildrenRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}