using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Extensions;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Payrolls.EmployeeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Payrolls.EmployeeRow;

namespace Indotalent.Payrolls
{
    public interface IEmployeeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeSaveHandler
    {
        public EmployeeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void BeforeSave()
        {
            base.BeforeSave();


            if (this.IsCreate)
            {
                if (Row.EmployeeNumber.ToLower().Equals("auto"))
                {
                    var tenant = UnitOfWork.Connection.ById<TenantRow>(Row.TenantId);
                    var request = new GetNextNumberRequest()
                    {
                        Prefix = tenant.EmployeeNumberUseDate.Value ? tenant.EmployeeNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.EmployeeNumberPrefix,
                        Length = tenant.EmployeeNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.EmployeeNumber, tenant.TenantId);
                    Row.EmployeeNumber = respone.Serial;
                    if (String.IsNullOrEmpty(Row.BiometricNumber)) Row.BiometricNumber = Row.EmployeeNumber;
                    if (String.IsNullOrEmpty(Row.TaxNumber)) Row.TaxNumber = Row.EmployeeNumber;
                }

            }
        }
    }
}