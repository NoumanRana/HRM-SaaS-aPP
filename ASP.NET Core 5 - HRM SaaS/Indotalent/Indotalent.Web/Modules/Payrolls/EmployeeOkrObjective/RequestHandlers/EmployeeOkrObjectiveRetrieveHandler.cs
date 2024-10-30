using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeOkrObjectiveRow>;
using MyRow = Indotalent.Payrolls.EmployeeOkrObjectiveRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeOkrObjectiveRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeOkrObjectiveRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeOkrObjectiveRetrieveHandler
    {
        public EmployeeOkrObjectiveRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}