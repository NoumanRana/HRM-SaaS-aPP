namespace Indotalent.Operation {
    export namespace BusinessTripParticipantService {
        export const baseUrl = 'Operation/BusinessTripParticipant';

        export declare function Create(request: Serenity.SaveRequest<BusinessTripParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<BusinessTripParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BusinessTripParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BusinessTripParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Operation/BusinessTripParticipant/Create",
            Update = "Operation/BusinessTripParticipant/Update",
            Delete = "Operation/BusinessTripParticipant/Delete",
            Retrieve = "Operation/BusinessTripParticipant/Retrieve",
            List = "Operation/BusinessTripParticipant/List"
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
