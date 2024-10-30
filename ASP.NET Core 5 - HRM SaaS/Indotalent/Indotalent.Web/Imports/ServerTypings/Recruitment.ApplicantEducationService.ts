namespace Indotalent.Recruitment {
    export namespace ApplicantEducationService {
        export const baseUrl = 'Recruitment/ApplicantEducation';

        export declare function Create(request: Serenity.SaveRequest<ApplicantEducationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ApplicantEducationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ApplicantEducationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ApplicantEducationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Recruitment/ApplicantEducation/Create",
            Update = "Recruitment/ApplicantEducation/Update",
            Delete = "Recruitment/ApplicantEducation/Delete",
            Retrieve = "Recruitment/ApplicantEducation/Retrieve",
            List = "Recruitment/ApplicantEducation/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ApplicantEducationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
