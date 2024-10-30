using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Payrolls.GradeRow>;
using MyRow = Indotalent.Payrolls.GradeRow;

namespace Indotalent.Payrolls
{
    public interface IGradeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class GradeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGradeListHandler
    {
        public GradeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}