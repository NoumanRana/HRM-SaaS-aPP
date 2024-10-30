using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Organization.DepartmentRow>;
using MyRow = Indotalent.Organization.DepartmentRow;

namespace Indotalent.Organization
{
    public interface IDepartmentRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DepartmentRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDepartmentRetrieveHandler
    {
        public DepartmentRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}