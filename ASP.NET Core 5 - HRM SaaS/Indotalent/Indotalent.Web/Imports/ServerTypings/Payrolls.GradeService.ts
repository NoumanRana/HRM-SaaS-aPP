namespace Indotalent.Payrolls {
    export namespace GradeService {
        export const baseUrl = 'Payrolls/Grade';

        export declare function Create(request: Serenity.SaveRequest<GradeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<GradeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GradeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GradeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Currency(request: GradeCurrencyRequest, onSuccess?: (response: GradeCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Payrolls/Grade/Create",
            Update = "Payrolls/Grade/Update",
            Delete = "Payrolls/Grade/Delete",
            Retrieve = "Payrolls/Grade/Retrieve",
            List = "Payrolls/Grade/List",
            Currency = "Payrolls/Grade/Currency"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Currency'
        ].forEach(x => {
            (<any>GradeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
