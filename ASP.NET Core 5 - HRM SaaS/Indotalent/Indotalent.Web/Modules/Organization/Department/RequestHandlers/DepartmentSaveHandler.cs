using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Organization.DepartmentRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Organization.DepartmentRow;

namespace Indotalent.Organization
{
    public interface IDepartmentSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DepartmentSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDepartmentSaveHandler
    {
        public DepartmentSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}