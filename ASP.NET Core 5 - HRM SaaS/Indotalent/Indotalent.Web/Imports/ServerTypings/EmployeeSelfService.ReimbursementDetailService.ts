namespace Indotalent.EmployeeSelfService {
    export namespace ReimbursementDetailService {
        export const baseUrl = 'EmployeeSelfService/ReimbursementDetail';

        export declare function Create(request: Serenity.SaveRequest<ReimbursementDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReimbursementDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReimbursementDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReimbursementDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/ReimbursementDetail/Create",
            Update = "EmployeeSelfService/ReimbursementDetail/Update",
            Delete = "EmployeeSelfService/ReimbursementDetail/Delete",
            Retrieve = "EmployeeSelfService/ReimbursementDetail/Retrieve",
            List = "EmployeeSelfService/ReimbursementDetail/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ReimbursementDetailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
