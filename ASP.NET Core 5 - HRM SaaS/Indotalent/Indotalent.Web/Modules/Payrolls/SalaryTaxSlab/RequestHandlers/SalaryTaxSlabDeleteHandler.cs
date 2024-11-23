using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.SalaryTaxSlabRow;

namespace Indotalent.Payrolls
{
    public interface ISalaryTaxSlabDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SalaryTaxSlabDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISalaryTaxSlabDeleteHandler
    {
        public SalaryTaxSlabDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}