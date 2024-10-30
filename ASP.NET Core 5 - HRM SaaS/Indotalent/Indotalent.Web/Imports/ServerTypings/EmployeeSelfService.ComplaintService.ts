namespace Indotalent.EmployeeSelfService {
    export namespace ComplaintService {
        export const baseUrl = 'EmployeeSelfService/Complaint';

        export declare function Create(request: Serenity.SaveRequest<ComplaintRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ComplaintRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ComplaintRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ComplaintRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function EmployeeId(request: ComplaintEmployeeIdRequest, onSuccess?: (response: ComplaintEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/Complaint/Create",
            Update = "EmployeeSelfService/Complaint/Update",
            Delete = "EmployeeSelfService/Complaint/Delete",
            Retrieve = "EmployeeSelfService/Complaint/Retrieve",
            List = "EmployeeSelfService/Complaint/List",
            EmployeeId = "EmployeeSelfService/Complaint/EmployeeId"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'EmployeeId'
        ].forEach(x => {
            (<any>ComplaintService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
