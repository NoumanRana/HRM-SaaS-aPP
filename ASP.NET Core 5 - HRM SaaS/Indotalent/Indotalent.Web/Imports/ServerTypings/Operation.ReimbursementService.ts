namespace Indotalent.Operation {
    export namespace ReimbursementService {
        export const baseUrl = 'Operation/Reimbursement';

        export declare function Create(request: Serenity.SaveRequest<ReimbursementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReimbursementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReimbursementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReimbursementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Currency(request: ReimbursementCurrencyRequest, onSuccess?: (response: ReimbursementCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Operation/Reimbursement/Create",
            Update = "Operation/Reimbursement/Update",
            Delete = "Operation/Reimbursement/Delete",
            Retrieve = "Operation/Reimbursement/Retrieve",
            List = "Operation/Reimbursement/List",
            Currency = "Operation/Reimbursement/Currency"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Currency'
        ].forEach(x => {
            (<any>ReimbursementService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
