using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.SalaryTaxSlabRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.SalaryTaxSlabRow;

namespace Indotalent.Payrolls
{
    public interface ISalaryTaxSlabSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse>
    {
        MyResponse Create(IUnitOfWork uow, SaveRequest<SalaryTaxSlabRow> request);
        MyResponse Update(IUnitOfWork uow, SaveRequest<SalaryTaxSlabRow> request);
    }

    public class SalaryTaxSlabSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISalaryTaxSlabSaveHandler
    {
        public SalaryTaxSlabSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}