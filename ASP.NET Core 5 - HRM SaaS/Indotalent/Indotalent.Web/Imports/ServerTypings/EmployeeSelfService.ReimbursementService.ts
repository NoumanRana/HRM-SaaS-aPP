namespace Indotalent.EmployeeSelfService {
    export namespace ReimbursementService {
        export const baseUrl = 'EmployeeSelfService/Reimbursement';

        export declare function Create(request: Serenity.SaveRequest<ReimbursementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReimbursementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReimbursementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReimbursementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Currency(request: ReimbursementCurrencyRequest, onSuccess?: (response: ReimbursementCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function EmployeeId(request: ReimbursementEmployeeIdRequest, onSuccess?: (response: ReimbursementEmployeeIdResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "EmployeeSelfService/Reimbursement/Create",
            Update = "EmployeeSelfService/Reimbursement/Update",
            Delete = "EmployeeSelfService/Reimbursement/Delete",
            Retrieve = "EmployeeSelfService/Reimbursement/Retrieve",
            List = "EmployeeSelfService/Reimbursement/List",
            Currency = "EmployeeSelfService/Reimbursement/Currency",
            EmployeeId = "EmployeeSelfService/Reimbursement/EmployeeId"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Currency', 
            'EmployeeId'
        ].forEach(x => {
            (<any>ReimbursementService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
