namespace Indotalent.Payrolls {
    export interface PayrollDetailRow {
        Id?: number;
        PayrollId?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        BankAccount?: string;
        BankName?: string;
        BasicSalary?: number;
        TotalIncome?: number;
        TotalDeduction?: number;
        TakeHomePay?: number;
        TenantId?: number;
        TenantName?: string;
        IncomeList?: PayrollDetailIncomeRow[];
        DeductionList?: PayrollDetailDeductionRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PayrollDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeName';
        export const localTextPrefix = 'Payrolls.PayrollDetail';
        export const lookupKey = 'Payrolls.PayrollDetail';

        export function getLookup(): Q.Lookup<PayrollDetailRow> {
            return Q.getLookup<PayrollDetailRow>('Payrolls.PayrollDetail');
        }
        export const deletePermission = 'Payrolls:Payroll';
        export const insertPermission = 'Payrolls:Payroll';
        export const readPermission = 'Payrolls:Payroll';
        export const updatePermission = 'Payrolls:Payroll';

        export declare const enum Fields {
            Id = "Id",
            PayrollId = "PayrollId",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BankAccount = "BankAccount",
            BankName = "BankName",
            BasicSalary = "BasicSalary",
            TotalIncome = "TotalIncome",
            TotalDeduction = "TotalDeduction",
            TakeHomePay = "TakeHomePay",
            TenantId = "TenantId",
            TenantName = "TenantName",
            IncomeList = "IncomeList",
            DeductionList = "DeductionList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
