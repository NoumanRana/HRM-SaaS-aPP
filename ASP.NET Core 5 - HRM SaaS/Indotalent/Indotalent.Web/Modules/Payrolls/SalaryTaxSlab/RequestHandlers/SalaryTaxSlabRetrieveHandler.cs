using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.SalaryTaxSlabRow>;
using MyRow = Indotalent.Payrolls.SalaryTaxSlabRow;

namespace Indotalent.Payrolls
{
    public interface ISalaryTaxSlabRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SalaryTaxSlabRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISalaryTaxSlabRetrieveHandler
    {
        public SalaryTaxSlabRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}