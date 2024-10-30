using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Organization.DesignationRow>;
using MyRow = Indotalent.Organization.DesignationRow;

namespace Indotalent.Organization
{
    public interface IDesignationRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DesignationRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDesignationRetrieveHandler
    {
        public DesignationRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}