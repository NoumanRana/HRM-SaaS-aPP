namespace Indotalent.EmployeeSelfService {
    export namespace OvertimeService {
        export const baseUrl = 'EmployeeSelfService/Overtime';

        export declare function Create(request: Serenity.SaveRequest<OvertimeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OvertimeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OvertimeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OvertimeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function EmployeeId(request: OvertimeEmployeeIdRequest, onSuccess?: (response: OvertimeEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/Overtime/Create",
            Update = "EmployeeSelfService/Overtime/Update",
            Delete = "EmployeeSelfService/Overtime/Delete",
            Retrieve = "EmployeeSelfService/Overtime/Retrieve",
            List = "EmployeeSelfService/Overtime/List",
            EmployeeId = "EmployeeSelfService/Overtime/EmployeeId"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'EmployeeId'
        ].forEach(x => {
            (<any>OvertimeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
