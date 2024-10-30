namespace Indotalent.Payrolls {
    export namespace EmployeeOkrResultService {
        export const baseUrl = 'Payrolls/EmployeeOkrResult';

        export declare function Create(request: Serenity.SaveRequest<EmployeeOkrResultRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmployeeOkrResultRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeOkrResultRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeOkrResultRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Payrolls/EmployeeOkrResult/Create",
            Update = "Payrolls/EmployeeOkrResult/Update",
            Delete = "Payrolls/EmployeeOkrResult/Delete",
            Retrieve = "Payrolls/EmployeeOkrResult/Retrieve",
            List = "Payrolls/EmployeeOkrResult/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmployeeOkrResultService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
