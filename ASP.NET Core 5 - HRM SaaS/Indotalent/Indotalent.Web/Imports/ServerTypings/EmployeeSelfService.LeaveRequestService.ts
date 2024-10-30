namespace Indotalent.EmployeeSelfService {
    export namespace LeaveRequestService {
        export const baseUrl = 'EmployeeSelfService/LeaveRequest';

        export declare function Create(request: Serenity.SaveRequest<LeaveRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LeaveRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaveRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaveRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function EmployeeId(request: LeaveRequestEmployeeIdRequest, onSuccess?: (response: LeaveRequestEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/LeaveRequest/Create",
            Update = "EmployeeSelfService/LeaveRequest/Update",
            Delete = "EmployeeSelfService/LeaveRequest/Delete",
            Retrieve = "EmployeeSelfService/LeaveRequest/Retrieve",
            List = "EmployeeSelfService/LeaveRequest/List",
            EmployeeId = "EmployeeSelfService/LeaveRequest/EmployeeId"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'EmployeeId'
        ].forEach(x => {
            (<any>LeaveRequestService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
