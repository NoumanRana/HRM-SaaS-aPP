namespace Indotalent.EmployeeSelfService {
    export namespace TrainingService {
        export const baseUrl = 'EmployeeSelfService/Training';

        export declare function Create(request: Serenity.SaveRequest<TrainingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TrainingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TrainingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TrainingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function EmployeeId(request: TrainingEmployeeIdRequest, onSuccess?: (response: TrainingEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/Training/Create",
            Update = "EmployeeSelfService/Training/Update",
            Delete = "EmployeeSelfService/Training/Delete",
            Retrieve = "EmployeeSelfService/Training/Retrieve",
            List = "EmployeeSelfService/Training/List",
            EmployeeId = "EmployeeSelfService/Training/EmployeeId"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'EmployeeId'
        ].forEach(x => {
            (<any>TrainingService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
