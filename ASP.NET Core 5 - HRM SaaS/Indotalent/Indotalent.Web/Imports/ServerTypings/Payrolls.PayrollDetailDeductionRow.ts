namespace Indotalent.Payrolls {
    export interface PayrollDetailDeductionRow {
        Id?: number;
        PayrollDetailId?: number;
        DeductionId?: number;
        ShortNote?: string;
        Amount?: number;
        DeductionName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PayrollDetailDeductionRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DeductionName';
        export const localTextPrefix = 'Payrolls.PayrollDetailDeduction';
        export const lookupKey = 'Payrolls.PayrollDetailDeduction';

        export function getLookup(): Q.Lookup<PayrollDetailDeductionRow> {
            return Q.getLookup<PayrollDetailDeductionRow>('Payrolls.PayrollDetailDeduction');
        }
        export const deletePermission = 'Payrolls:Payroll';
        export const insertPermission = 'Payrolls:Payroll';
        export const readPermission = 'Payrolls:Payroll';
        export const updatePermission = 'Payrolls:Payroll';

        export declare const enum Fields {
            Id = "Id",
            PayrollDetailId = "PayrollDetailId",
            DeductionId = "DeductionId",
            ShortNote = "ShortNote",
            Amount = "Amount",
            DeductionName = "DeductionName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
