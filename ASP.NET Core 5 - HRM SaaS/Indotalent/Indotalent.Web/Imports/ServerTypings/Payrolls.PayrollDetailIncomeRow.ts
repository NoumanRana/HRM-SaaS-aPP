namespace Indotalent.Payrolls {
    export interface PayrollDetailIncomeRow {
        Id?: number;
        PayrollDetailId?: number;
        IncomeId?: number;
        ShortNote?: string;
        Amount?: number;
        IncomeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PayrollDetailIncomeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'IncomeName';
        export const localTextPrefix = 'Payrolls.PayrollDetailIncome';
        export const lookupKey = 'Payrolls.PayrollDetailIncome';

        export function getLookup(): Q.Lookup<PayrollDetailIncomeRow> {
            return Q.getLookup<PayrollDetailIncomeRow>('Payrolls.PayrollDetailIncome');
        }
        export const deletePermission = 'Payrolls:Payroll';
        export const insertPermission = 'Payrolls:Payroll';
        export const readPermission = 'Payrolls:Payroll';
        export const updatePermission = 'Payrolls:Payroll';

        export declare const enum Fields {
            Id = "Id",
            PayrollDetailId = "PayrollDetailId",
            IncomeId = "IncomeId",
            ShortNote = "ShortNote",
            Amount = "Amount",
            IncomeName = "IncomeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
