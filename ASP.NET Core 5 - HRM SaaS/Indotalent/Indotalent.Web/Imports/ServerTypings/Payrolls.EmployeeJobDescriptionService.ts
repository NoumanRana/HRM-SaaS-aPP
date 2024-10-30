namespace Indotalent.Payrolls {
    export namespace EmployeeJobDescriptionService {
        export const baseUrl = 'Payrolls/EmployeeJobDescription';

        export declare function Create(request: Serenity.SaveRequest<EmployeeJobDescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmployeeJobDescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeJobDescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeJobDescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Payrolls/EmployeeJobDescription/Create",
            Update = "Payrolls/EmployeeJobDescription/Update",
            Delete = "Payrolls/EmployeeJobDescription/Delete",
            Retrieve = "Payrolls/EmployeeJobDescription/Retrieve",
            List = "Payrolls/EmployeeJobDescription/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmployeeJobDescriptionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
