using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeJobDescriptionRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeJobDescriptionRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeJobDescriptionSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeJobDescriptionSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeJobDescriptionSaveHandler
    {
        public EmployeeJobDescriptionSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}