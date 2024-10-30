namespace Indotalent.Payrolls {
    export namespace EmployeeOkrObjectiveService {
        export const baseUrl = 'Payrolls/EmployeeOkrObjective';

        export declare function Create(request: Serenity.SaveRequest<EmployeeOkrObjectiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmployeeOkrObjectiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeOkrObjectiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeOkrObjectiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Payrolls/EmployeeOkrObjective/Create",
            Update = "Payrolls/EmployeeOkrObjective/Update",
            Delete = "Payrolls/EmployeeOkrObjective/Delete",
            Retrieve = "Payrolls/EmployeeOkrObjective/Retrieve",
            List = "Payrolls/EmployeeOkrObjective/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmployeeOkrObjectiveService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
