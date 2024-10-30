using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.EmployeeJobDescriptionRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeJobDescriptionDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeJobDescriptionDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeJobDescriptionDeleteHandler
    {
        public EmployeeJobDescriptionDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}