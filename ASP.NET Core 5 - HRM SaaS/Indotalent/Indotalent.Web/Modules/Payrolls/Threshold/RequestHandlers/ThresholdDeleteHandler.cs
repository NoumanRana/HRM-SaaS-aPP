using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.ThresholdRow;

namespace Indotalent.Payrolls
{
    public interface IThresholdDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ThresholdDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IThresholdDeleteHandler
    {
        public ThresholdDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}