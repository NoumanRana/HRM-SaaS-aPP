using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.ThresholdRow>;
using MyRow = Indotalent.Payrolls.ThresholdRow;

namespace Indotalent.Payrolls
{
    public interface IThresholdListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ThresholdListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IThresholdListHandler
    {
        public ThresholdListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}