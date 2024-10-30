namespace Indotalent.EmployeeSelfService {
    export namespace BusinessTripParticipantService {
        export const baseUrl = 'EmployeeSelfService/BusinessTripParticipant';

        export declare function Create(request: Serenity.SaveRequest<BusinessTripParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<BusinessTripParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BusinessTripParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BusinessTripParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/BusinessTripParticipant/Create",
            Update = "EmployeeSelfService/BusinessTripParticipant/Update",
            Delete = "EmployeeSelfService/BusinessTripParticipant/Delete",
            Retrieve = "EmployeeSelfService/BusinessTripParticipant/Retrieve",
            List = "EmployeeSelfService/BusinessTripParticipant/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>BusinessTripParticipantService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
