using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.EmployeeJobDescriptionRow>;
using MyRow = Indotalent.Payrolls.EmployeeJobDescriptionRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeJobDescriptionRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeJobDescriptionRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeJobDescriptionRetrieveHandler
    {
        public EmployeeJobDescriptionRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}