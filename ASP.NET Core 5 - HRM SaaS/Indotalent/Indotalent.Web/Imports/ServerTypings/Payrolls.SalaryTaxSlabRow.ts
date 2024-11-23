namespace Indotalent.Payrolls {
    export interface SalaryTaxSlabRow {
        TaxSlabId?: number;
        SlabRange?: string;
        From?: number;
        To?: number;
        ExemptedAmount?: number;
        Rate?: number;
    }

    export namespace SalaryTaxSlabRow {
        export const idProperty = 'TaxSlabId';
        export const nameProperty = 'SlabRange';
        export const localTextPrefix = 'Payrolls.SalaryTaxSlab';
        export const deletePermission = 'Payrolls:SalaryTaxSlab';
        export const insertPermission = 'Payrolls:SalaryTaxSlab';
        export const readPermission = 'Payrolls:SalaryTaxSlab';
        export const updatePermission = 'Payrolls:SalaryTaxSlab';

        export declare const enum Fields {
            TaxSlabId = "TaxSlabId",
            SlabRange = "SlabRange",
            From = "From",
            To = "To",
            ExemptedAmount = "ExemptedAmount",
            Rate = "Rate"
        }
    }
}
