using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Payrolls.GradeRow>;
using MyRow = Indotalent.Payrolls.GradeRow;

namespace Indotalent.Payrolls
{
    public interface IGradeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GradeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGradeRetrieveHandler
    {
        public GradeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}