using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Organization.DesignationRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Organization.DesignationRow;

namespace Indotalent.Organization
{
    public interface IDesignationSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DesignationSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDesignationSaveHandler
    {
        public DesignationSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}