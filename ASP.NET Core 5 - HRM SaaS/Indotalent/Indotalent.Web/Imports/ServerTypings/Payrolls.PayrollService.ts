namespace Indotalent.Payrolls {
    export namespace PayrollService {
        export const baseUrl = 'Payrolls/Payroll';

        export declare function Create(request: Serenity.SaveRequest<PayrollRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PayrollRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PayrollRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PayrollRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Currency(request: PayrollCurrencyRequest, onSuccess?: (response: PayrollCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Payrolls/Payroll/Create",
            Update = "Payrolls/Payroll/Update",
            Delete = "Payrolls/Payroll/Delete",
            Retrieve = "Payrolls/Payroll/Retrieve",
            List = "Payrolls/Payroll/List",
            Currency = "Payrolls/Payroll/Currency"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Currency'
        ].forEach(x => {
            (<any>PayrollService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
