using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.BusinessTripRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.BusinessTripRow;

namespace Indotalent.Operation
{
    public interface IBusinessTripSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BusinessTripSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessTripSaveHandler
    {
        public BusinessTripSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}