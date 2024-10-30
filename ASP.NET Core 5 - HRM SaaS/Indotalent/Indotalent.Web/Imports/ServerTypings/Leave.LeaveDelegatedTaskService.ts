namespace Indotalent.Leave {
    export namespace LeaveDelegatedTaskService {
        export const baseUrl = 'Leave/LeaveDelegatedTask';

        export declare function Create(request: Serenity.SaveRequest<LeaveDelegatedTaskRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LeaveDelegatedTaskRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaveDelegatedTaskRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaveDelegatedTaskRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Leave/LeaveDelegatedTask/Create",
            Update = "Leave/LeaveDelegatedTask/Update",
            Delete = "Leave/LeaveDelegatedTask/Delete",
            Retrieve = "Leave/LeaveDelegatedTask/Retrieve",
            List = "Leave/LeaveDelegatedTask/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>LeaveDelegatedTaskService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
