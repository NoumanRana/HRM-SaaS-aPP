using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.EmployeeOkrObjectiveRow>;
using MyRow = Indotalent.Payrolls.EmployeeOkrObjectiveRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeOkrObjectiveListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeOkrObjectiveListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeOkrObjectiveListHandler
    {
        public EmployeeOkrObjectiveListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}