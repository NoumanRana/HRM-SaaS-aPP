namespace Indotalent.Recruitment {
    export namespace ApplicantExperienceService {
        export const baseUrl = 'Recruitment/ApplicantExperience';

        export declare function Create(request: Serenity.SaveRequest<ApplicantExperienceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ApplicantExperienceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ApplicantExperienceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ApplicantExperienceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Recruitment/ApplicantExperience/Create",
            Update = "Recruitment/ApplicantExperience/Update",
            Delete = "Recruitment/ApplicantExperience/Delete",
            Retrieve = "Recruitment/ApplicantExperience/Retrieve",
            List = "Recruitment/ApplicantExperience/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ApplicantExperienceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
