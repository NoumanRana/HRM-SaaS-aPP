namespace Indotalent.EmployeeSelfService {
    export namespace TrainingParticipantService {
        export const baseUrl = 'EmployeeSelfService/TrainingParticipant';

        export declare function Create(request: Serenity.SaveRequest<TrainingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TrainingParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TrainingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TrainingParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/TrainingParticipant/Create",
            Update = "EmployeeSelfService/TrainingParticipant/Update",
            Delete = "EmployeeSelfService/TrainingParticipant/Delete",
            Retrieve = "EmployeeSelfService/TrainingParticipant/Retrieve",
            List = "EmployeeSelfService/TrainingParticipant/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TrainingParticipantService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
