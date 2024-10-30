using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.DeductionRow>;
using MyRow = Indotalent.Payrolls.DeductionRow;

namespace Indotalent.Payrolls
{
    public interface IDeductionRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DeductionRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDeductionRetrieveHandler
    {
        public DeductionRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}