using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.SalaryTaxSlabRow>;
using MyRow = Indotalent.Payrolls.SalaryTaxSlabRow;

namespace Indotalent.Payrolls
{
    public interface ISalaryTaxSlabListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SalaryTaxSlabListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISalaryTaxSlabListHandler
    {
        public SalaryTaxSlabListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}