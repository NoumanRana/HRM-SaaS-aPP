using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Payrolls.GradeRow;

namespace Indotalent.Payrolls
{
    public interface IGradeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class GradeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGradeDeleteHandler
    {
        public GradeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}