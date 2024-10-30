namespace Indotalent.Payrolls {
    export namespace PayrollDetailIncomeService {
        export const baseUrl = 'Payrolls/PayrollDetailIncome';

        export declare function Create(request: Serenity.SaveRequest<PayrollDetailIncomeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PayrollDetailIncomeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PayrollDetailIncomeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PayrollDetailIncomeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Payrolls/PayrollDetailIncome/Create",
            Update = "Payrolls/PayrollDetailIncome/Update",
            Delete = "Payrolls/PayrollDetailIncome/Delete",
            Retrieve = "Payrolls/PayrollDetailIncome/Retrieve",
            List = "Payrolls/PayrollDetailIncome/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PayrollDetailIncomeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
