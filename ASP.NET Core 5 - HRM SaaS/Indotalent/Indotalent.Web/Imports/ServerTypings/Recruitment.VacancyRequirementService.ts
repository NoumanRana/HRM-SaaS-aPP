namespace Indotalent.Recruitment {
    export namespace VacancyRequirementService {
        export const baseUrl = 'Recruitment/VacancyRequirement';

        export declare function Create(request: Serenity.SaveRequest<VacancyRequirementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VacancyRequirementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VacancyRequirementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VacancyRequirementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Recruitment/VacancyRequirement/Create",
            Update = "Recruitment/VacancyRequirement/Update",
            Delete = "Recruitment/VacancyRequirement/Delete",
            Retrieve = "Recruitment/VacancyRequirement/Retrieve",
            List = "Recruitment/VacancyRequirement/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VacancyRequirementService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
