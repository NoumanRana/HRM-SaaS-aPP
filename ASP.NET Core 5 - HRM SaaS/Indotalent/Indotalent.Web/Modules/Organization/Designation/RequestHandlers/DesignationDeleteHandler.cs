using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Organization.DesignationRow;

namespace Indotalent.Organization
{
    public interface IDesignationDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DesignationDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDesignationDeleteHandler
    {
        public DesignationDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}