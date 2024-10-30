using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Operation.HolidayRow>;
using MyRow = Indotalent.Operation.HolidayRow;

namespace Indotalent.Operation
{
    public interface IHolidayListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class HolidayListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IHolidayListHandler
    {
        public HolidayListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}