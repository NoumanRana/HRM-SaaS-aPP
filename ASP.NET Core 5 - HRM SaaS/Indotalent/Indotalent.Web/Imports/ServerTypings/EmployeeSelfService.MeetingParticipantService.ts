namespace Indotalent.EmployeeSelfService {
    export namespace MeetingParticipantService {
        export const baseUrl = 'EmployeeSelfService/MeetingParticipant';

        export declare function Create(request: Serenity.SaveRequest<MeetingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MeetingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/MeetingParticipant/Create",
            Update = "EmployeeSelfService/MeetingParticipant/Update",
            Delete = "EmployeeSelfService/MeetingParticipant/Delete",
            Retrieve = "EmployeeSelfService/MeetingParticipant/Retrieve",
            List = "EmployeeSelfService/MeetingParticipant/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MeetingParticipantService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
