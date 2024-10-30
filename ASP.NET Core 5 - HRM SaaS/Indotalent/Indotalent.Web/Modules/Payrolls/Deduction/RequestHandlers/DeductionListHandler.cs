using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.DeductionRow>;
using MyRow = Indotalent.Payrolls.DeductionRow;

namespace Indotalent.Payrolls
{
    public interface IDeductionListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DeductionListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDeductionListHandler
    {
        public DeductionListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}