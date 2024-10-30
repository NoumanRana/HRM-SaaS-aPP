using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Performance.AppraisalRow;

namespace Indotalent.Performance
{
    public interface IAppraisalDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AppraisalDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAppraisalDeleteHandler
    {
        public AppraisalDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}