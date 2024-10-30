using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.GradeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.GradeRow;

namespace Indotalent.Payrolls
{
    public interface IGradeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class GradeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGradeSaveHandler
    {
        public GradeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}