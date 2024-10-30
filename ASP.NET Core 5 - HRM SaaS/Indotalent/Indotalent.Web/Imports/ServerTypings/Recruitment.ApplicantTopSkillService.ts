namespace Indotalent.Recruitment {
    export namespace ApplicantTopSkillService {
        export const baseUrl = 'Recruitment/ApplicantTopSkill';

        export declare function Create(request: Serenity.SaveRequest<ApplicantTopSkillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ApplicantTopSkillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ApplicantTopSkillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ApplicantTopSkillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Recruitment/ApplicantTopSkill/Create",
            Update = "Recruitment/ApplicantTopSkill/Update",
            Delete = "Recruitment/ApplicantTopSkill/Delete",
            Retrieve = "Recruitment/ApplicantTopSkill/Retrieve",
            List = "Recruitment/ApplicantTopSkill/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ApplicantTopSkillService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
