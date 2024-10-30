namespace Indotalent.Leave {
    export namespace LeaveEmergencyContactService {
        export const baseUrl = 'Leave/LeaveEmergencyContact';

        export declare function Create(request: Serenity.SaveRequest<LeaveEmergencyContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LeaveEmergencyContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LeaveEmergencyContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LeaveEmergencyContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Leave/LeaveEmergencyContact/Create",
            Update = "Leave/LeaveEmergencyContact/Update",
            Delete = "Leave/LeaveEmergencyContact/Delete",
            Retrieve = "Leave/LeaveEmergencyContact/Retrieve",
            List = "Leave/LeaveEmergencyContact/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>LeaveEmergencyContactService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
