namespace Indotalent.Payrolls {
    export interface EmployeeDeductionRow {
        Id?: number;
        EmployeeId?: number;
        DeductionId?: number;
        Description?: string;
        Amount?: number;
        EmployeeName?: string;
        DeductionName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeDeductionRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DeductionName';
        export const localTextPrefix = 'Payrolls.EmployeeDeduction';
        export const lookupKey = 'Payrolls.EmployeeDeduction';

        export function getLookup(): Q.Lookup<EmployeeDeductionRow> {
            return Q.getLookup<EmployeeDeductionRow>('Payrolls.EmployeeDeduction');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            DeductionId = "DeductionId",
            Description = "Description",
            Amount = "Amount",
            EmployeeName = "EmployeeName",
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
