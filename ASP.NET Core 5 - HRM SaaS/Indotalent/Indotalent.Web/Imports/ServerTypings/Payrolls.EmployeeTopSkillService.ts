namespace Indotalent.Payrolls {
    export namespace EmployeeTopSkillService {
        export const baseUrl = 'Payrolls/EmployeeTopSkill';

        export declare function Create(request: Serenity.SaveRequest<EmployeeTopSkillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmployeeTopSkillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeTopSkillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeTopSkillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Payrolls/EmployeeTopSkill/Create",
            Update = "Payrolls/EmployeeTopSkill/Update",
            Delete = "Payrolls/EmployeeTopSkill/Delete",
            Retrieve = "Payrolls/EmployeeTopSkill/Retrieve",
            List = "Payrolls/EmployeeTopSkill/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmployeeTopSkillService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
