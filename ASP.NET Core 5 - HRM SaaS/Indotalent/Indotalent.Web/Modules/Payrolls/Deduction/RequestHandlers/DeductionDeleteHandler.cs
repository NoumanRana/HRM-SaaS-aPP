using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.DeductionRow;

namespace Indotalent.Payrolls
{
    public interface IDeductionDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DeductionDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDeductionDeleteHandler
    {
        public DeductionDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}