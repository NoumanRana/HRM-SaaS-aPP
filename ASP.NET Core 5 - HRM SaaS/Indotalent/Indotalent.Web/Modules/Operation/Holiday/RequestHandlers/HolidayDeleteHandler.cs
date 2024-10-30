using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Operation.HolidayRow;

namespace Indotalent.Operation
{
    public interface IHolidayDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class HolidayDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IHolidayDeleteHandler
    {
        public HolidayDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}