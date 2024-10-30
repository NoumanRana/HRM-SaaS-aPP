using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.DeductionRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.DeductionRow;

namespace Indotalent.Payrolls
{
    public interface IDeductionSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DeductionSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDeductionSaveHandler
    {
        public DeductionSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}