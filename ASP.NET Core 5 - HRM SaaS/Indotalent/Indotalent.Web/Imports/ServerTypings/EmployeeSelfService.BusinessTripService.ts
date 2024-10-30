namespace Indotalent.EmployeeSelfService {
    export namespace BusinessTripService {
        export const baseUrl = 'EmployeeSelfService/BusinessTrip';

        export declare function Create(request: Serenity.SaveRequest<BusinessTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<BusinessTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BusinessTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BusinessTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function EmployeeId(request: BusinessTripEmployeeIdRequest, onSuccess?: (response: BusinessTripEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/BusinessTrip/Create",
            Update = "EmployeeSelfService/BusinessTrip/Update",
            Delete = "EmployeeSelfService/BusinessTrip/Delete",
            Retrieve = "EmployeeSelfService/BusinessTrip/Retrieve",
            List = "EmployeeSelfService/BusinessTrip/List",
            EmployeeId = "EmployeeSelfService/BusinessTrip/EmployeeId"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'EmployeeId'
        ].forEach(x => {
            (<any>BusinessTripService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
