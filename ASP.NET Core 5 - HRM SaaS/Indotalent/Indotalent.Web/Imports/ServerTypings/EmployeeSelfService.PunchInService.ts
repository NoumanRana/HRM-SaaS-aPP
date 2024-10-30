namespace Indotalent.EmployeeSelfService {
    export namespace PunchInService {
        export const baseUrl = 'EmployeeSelfService/PunchIn';

        export declare function Create(request: Serenity.SaveRequest<PunchInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PunchInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PunchInRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PunchInRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function EmployeeId(request: PunchInEmployeeIdRequest, onSuccess?: (response: PunchInEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/PunchIn/Create",
            Update = "EmployeeSelfService/PunchIn/Update",
            Delete = "EmployeeSelfService/PunchIn/Delete",
            Retrieve = "EmployeeSelfService/PunchIn/Retrieve",
            List = "EmployeeSelfService/PunchIn/List",
            EmployeeId = "EmployeeSelfService/PunchIn/EmployeeId"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'EmployeeId'
        ].forEach(x => {
            (<any>PunchInService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
