using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeOkrObjectiveRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeOkrObjectiveDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeOkrObjectiveDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeOkrObjectiveDeleteHandler
    {
        public EmployeeOkrObjectiveDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}