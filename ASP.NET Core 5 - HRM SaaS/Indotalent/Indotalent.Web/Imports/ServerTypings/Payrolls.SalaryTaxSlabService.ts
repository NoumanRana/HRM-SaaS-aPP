namespace Indotalent.Payrolls {
    export namespace SalaryTaxSlabService {
        export const baseUrl = 'Payrolls/SalaryTaxSlab';

        export declare function Create(request: Serenity.SaveRequest<SalaryTaxSlabRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SalaryTaxSlabRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalaryTaxSlabRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalaryTaxSlabRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Payrolls/SalaryTaxSlab/Create",
            Update = "Payrolls/SalaryTaxSlab/Update",
            Delete = "Payrolls/SalaryTaxSlab/Delete",
            Retrieve = "Payrolls/SalaryTaxSlab/Retrieve",
            List = "Payrolls/SalaryTaxSlab/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SalaryTaxSlabService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
