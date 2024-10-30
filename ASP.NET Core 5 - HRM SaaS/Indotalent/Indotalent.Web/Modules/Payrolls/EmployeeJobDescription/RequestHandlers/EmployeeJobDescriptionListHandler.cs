using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeJobDescriptionRow>;
using MyRow = Indotalent.Payrolls.EmployeeJobDescriptionRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeJobDescriptionListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeJobDescriptionListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeJobDescriptionListHandler
    {
        public EmployeeJobDescriptionListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}