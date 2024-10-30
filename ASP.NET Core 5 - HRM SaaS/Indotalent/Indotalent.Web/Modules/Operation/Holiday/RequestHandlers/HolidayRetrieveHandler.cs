using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Operation.HolidayRow>;
using MyRow = Indotalent.Operation.HolidayRow;

namespace Indotalent.Operation
{
    public interface IHolidayRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class HolidayRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IHolidayRetrieveHandler
    {
        public HolidayRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}