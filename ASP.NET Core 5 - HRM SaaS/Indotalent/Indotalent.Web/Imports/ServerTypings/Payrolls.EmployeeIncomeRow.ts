namespace Indotalent.Payrolls {
    export interface EmployeeIncomeRow {
        Id?: number;
        EmployeeId?: number;
        IncomeId?: number;
        Description?: string;
        Amount?: number;
        EmployeeName?: string;
        IncomeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeIncomeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'IncomeName';
        export const localTextPrefix = 'Payrolls.EmployeeIncome';
        export const lookupKey = 'Payrolls.EmployeeIncome';

        export function getLookup(): Q.Lookup<EmployeeIncomeRow> {
            return Q.getLookup<EmployeeIncomeRow>('Payrolls.EmployeeIncome');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            IncomeId = "IncomeId",
            Description = "Description",
            Amount = "Amount",
            EmployeeName = "EmployeeName",
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
