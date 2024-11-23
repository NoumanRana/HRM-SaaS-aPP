using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.ThresholdRow>;
using MyRow = Indotalent.Payrolls.ThresholdRow;

namespace Indotalent.Payrolls
{
    public interface IThresholdRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ThresholdRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IThresholdRetrieveHandler
    {
        public ThresholdRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}