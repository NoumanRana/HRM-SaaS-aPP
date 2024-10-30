namespace Indotalent.Payrolls {
    export namespace EmployeeDeductionService {
        export const baseUrl = 'Payrolls/EmployeeDeduction';

        export declare function Create(request: Serenity.SaveRequest<EmployeeDeductionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmployeeDeductionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeDeductionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeDeductionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Payrolls/EmployeeDeduction/Create",
            Update = "Payrolls/EmployeeDeduction/Update",
            Delete = "Payrolls/EmployeeDeduction/Delete",
            Retrieve = "Payrolls/EmployeeDeduction/Retrieve",
            List = "Payrolls/EmployeeDeduction/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmployeeDeductionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
