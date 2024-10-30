using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.IncomeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.IncomeRow;

namespace Indotalent.Payrolls
{
    public interface IIncomeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class IncomeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IIncomeSaveHandler
    {
        public IncomeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}