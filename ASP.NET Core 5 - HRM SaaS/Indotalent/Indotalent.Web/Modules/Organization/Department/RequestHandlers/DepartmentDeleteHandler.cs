using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Organization.DepartmentRow;

namespace Indotalent.Organization
{
    public interface IDepartmentDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DepartmentDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDepartmentDeleteHandler
    {
        public DepartmentDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}