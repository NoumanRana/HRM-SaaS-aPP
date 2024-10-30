namespace Indotalent.Payrolls {
    export interface PayrollRow {
        Id?: number;
        Number?: string;
        Description?: string;
        PaymentDate?: string;
        AutoGeneratePayrollDetail?: boolean;
        TotalBasicSalary?: number;
        TotalIncome?: number;
        TotalDeduction?: number;
        TotalTakeHomePay?: number;
        TotalPaymentAmount?: number;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: PayrollDetailRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PayrollRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Payrolls.Payroll';
        export const lookupKey = 'Payrolls.Payroll';

        export function getLookup(): Q.Lookup<PayrollRow> {
            return Q.getLookup<PayrollRow>('Payrolls.Payroll');
        }
        export const deletePermission = 'Payrolls:Payroll';
        export const insertPermission = 'Payrolls:Payroll';
        export const readPermission = 'Payrolls:Payroll';
        export const updatePermission = 'Payrolls:Payroll';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            PaymentDate = "PaymentDate",
            AutoGeneratePayrollDetail = "AutoGeneratePayrollDetail",
            TotalBasicSalary = "TotalBasicSalary",
            TotalIncome = "TotalIncome",
            TotalDeduction = "TotalDeduction",
            TotalTakeHomePay = "TotalTakeHomePay",
            TotalPaymentAmount = "TotalPaymentAmount",
            CurrencyName = "CurrencyName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ItemList = "ItemList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
