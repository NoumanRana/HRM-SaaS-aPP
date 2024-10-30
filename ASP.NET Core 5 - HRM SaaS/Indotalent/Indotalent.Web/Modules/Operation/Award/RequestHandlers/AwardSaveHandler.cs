using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Operation.AwardRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Operation.AwardRow;

namespace Indotalent.Operation
{
    public interface IAwardSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AwardSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAwardSaveHandler
    {
        public AwardSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}