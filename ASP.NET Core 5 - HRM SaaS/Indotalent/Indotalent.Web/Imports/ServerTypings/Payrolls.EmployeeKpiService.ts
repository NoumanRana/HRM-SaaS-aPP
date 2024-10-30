namespace Indotalent.Payrolls {
    export namespace EmployeeKpiService {
        export const baseUrl = 'Payrolls/EmployeeKpi';

        export declare function Create(request: Serenity.SaveRequest<EmployeeKpiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmployeeKpiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeKpiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeKpiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Payrolls/EmployeeKpi/Create",
            Update = "Payrolls/EmployeeKpi/Update",
            Delete = "Payrolls/EmployeeKpi/Delete",
            Retrieve = "Payrolls/EmployeeKpi/Retrieve",
            List = "Payrolls/EmployeeKpi/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmployeeKpiService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
