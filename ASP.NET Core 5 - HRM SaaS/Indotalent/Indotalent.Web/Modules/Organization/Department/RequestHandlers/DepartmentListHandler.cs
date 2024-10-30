using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Organization.DepartmentRow>;
using MyRow = Indotalent.Organization.DepartmentRow;

namespace Indotalent.Organization
{
    public interface IDepartmentListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DepartmentListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDepartmentListHandler
    {
        public DepartmentListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}