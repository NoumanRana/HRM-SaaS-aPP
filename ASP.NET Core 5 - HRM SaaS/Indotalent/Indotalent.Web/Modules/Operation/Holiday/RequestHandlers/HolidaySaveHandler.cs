using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.HolidayRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.HolidayRow;

namespace Indotalent.Operation
{
    public interface IHolidaySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class HolidaySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IHolidaySaveHandler
    {
        public HolidaySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}